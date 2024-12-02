import React from "react";
import ProjectsCard, { ProjectsTypeCard } from "@/components/ProjectsCard";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const Work = async () => {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });
  return (
    <>
      <section className="section-container">
        <ul className="project_grid mx-7">
          {projects?.length > 0 ? (
            projects.map((projects: ProjectsTypeCard) => (
              <ProjectsCard key={projects?._id} projects={projects} />
            ))
          ) : (
            <p className="no-result">No services found</p>
          )}
        </ul>
      </section>
    </>
  );
};
export default Work;
