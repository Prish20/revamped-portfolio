"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

// Define the type for the repository object
interface Repo {
  owner: {
    login: string;
  };
  name: string;
}

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);

  // Use the GitHub token from the .env file
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  // Function to fetch all repositories and count total commits
  const fetchAllCommits = async () => {
    try {
      // Step 1: Fetch all repositories
      const repoResponse = await fetch(
        "https://api.github.com/users/Prish20/repos?per_page=100",
        {
          headers: {
            Authorization: `${GITHUB_TOKEN}`, // Use token from .env
          },
        },
      );

      if (!repoResponse.ok) {
        throw new Error(
          `Failed to fetch repositories: ${repoResponse.statusText}`,
        );
      }

      const repos: Repo[] = await repoResponse.json();

      if (!Array.isArray(repos)) {
        throw new Error("The response is not an array of repositories");
      }

      let totalCommits = 0;

      // Step 2: Loop through each repository to fetch the commits
      const commitPromises = repos.map(async (repo: Repo) => {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=1`,
          {
            headers: {
              Authorization: `${GITHUB_TOKEN}`, // Use token from .env
            },
          },
        );

        const commitHeaders = commitsResponse.headers.get("link");

        if (commitHeaders) {
          // Parse the total number of commits using the "link" headers for pagination
          const lastPageLink = commitHeaders
            .split(",")
            .find((s) => s.includes('rel="last"'))
            ?.match(/&page=(\d+)>/); // Extract the last page number from the URL

          if (lastPageLink) {
            totalCommits += parseInt(lastPageLink[1], 10); // Add the total commits from the last page number
          }
        } else {
          // Fallback if there is no "link" header, fetch the first page commits
          const commits = await commitsResponse.json();
          totalCommits += commits.length;
        }
      });

      // Wait for all commit requests to complete
      await Promise.all(commitPromises);

      // Step 3: Set the total commit count in the state
      setCommitCount(totalCommits);
    } catch (error) {
      console.error("Error fetching commit data:", error);
    }
  };

  // useEffect to fetch commits on component mount
  useEffect(() => {
    fetchAllCommits();
  });

  // Stats data with dynamic commit count and "+" appended
  const stats = [
    { num: 2, text: "Years of Experience" },
    { num: 5, text: "Projects Completed" },
    { num: 10, text: "Technologies Mastered" },
    { num: commitCount, text: "Code Commits" },
  ];

  return (
    <section className="pb-12 pt-4 xl:py-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <div className="flex items-center">
                  <CountUp
                    end={item.num}
                    delay={2}
                    duration={5}
                    className="text-4xl font-extrabold xl:text-6xl"
                  />
                  <span className="text-4xl font-extrabold xl:text-6xl">+</span>
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
