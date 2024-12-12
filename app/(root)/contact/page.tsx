"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";
import BlurFade from "@/components/ui/blur-fade";

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_u09y11a",
        "template_e7emcu2",
        {
          from_name: `${form.firstName} ${form.lastName}`,
          to_name: "Christadrian Sanya",
          to_email: "contact@christadriansanya.me",
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        "IiZAb8xBNAEh8s0pm",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });
          setTimeout(() => {
            hideAlert(false);
            setForm({ firstName: "", lastName: "", email: "", message: "" });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        },
      );
  };

  return (
    <>
      <BlurFade>
        {alert.show && <Alert {...alert} />}
        <section className="container mx-auto flex flex-col items-center justify-center rounded-lg bg-blue-100 px-6 py-12 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-extrabold uppercase text-black">
            Contact Me
          </h1>
          <p className="max-w-2xl text-center text-lg text-gray-700">
            Whether you have a new project in mind or need support with an
            existing one, I&apos;m here to help. Reach out and let&apos;s
            discuss how we can turn your ideas into reality.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <label className="space-y-3">
                <span className="text-lg text-gray-700">First Name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/50 bg-primary/20 p-2 shadow-xl focus:border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </label>
              <label className="space-y-3">
                <span className="text-lg text-gray-700">Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="First Name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/50 bg-primary/20 p-2 shadow-xl focus:border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </label>
            </div>
            <label className="space-y-3">
              <span className="text-lg text-gray-700">Your Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                required
                onChange={handleChange}
                className="w-full rounded-xl border border-black/50 bg-primary/20 p-2 shadow-xl focus:border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-gray-700">Your Message</span>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                required
                rows={5}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/50 bg-primary/20 p-2 shadow-xl focus:border-none focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-accent py-3 text-lg font-bold text-white shadow-xl hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </BlurFade>
    </>
  );
};

export default Page;
