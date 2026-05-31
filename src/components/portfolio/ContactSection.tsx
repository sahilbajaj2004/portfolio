"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa6";

export default function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "b05151b3-51e7-4309-aee1-6188b48c7457");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <section className="text-center mb-0">
      <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
        Contact
      </div>
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Want to chat? Just shoot me a dm
        <br />
        <a
          href="https://wa.me/919811057531"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          with a direct question on WhatsApp
        </a>{" "}
        and I&apos;ll respond whenever I can.
        <br />I will ignore all soliciting.
      </p>

      

      <form
        className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200/80 dark:border-transparent bg-white dark:bg-[#0f0f0f] shadow-lg p-6 sm:p-8 text-left"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="h-11 rounded-lg border border-gray-200 dark:border-[#232329] bg-gray-50 dark:bg-[#161616] px-4 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500/70 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-900/30 dark:focus:ring-gray-100/20"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Phone No
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              required
              className="h-11 rounded-lg border border-gray-200 dark:border-[#232329] bg-gray-50 dark:bg-[#161616] px-4 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500/70 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-900/30 dark:focus:ring-gray-100/20"
            />
          </label>
        </div>

        <div className="mt-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="h-11 rounded-lg border border-gray-200 dark:border-[#232329] bg-gray-50 dark:bg-[#161616] px-4 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500/70 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-900/30 dark:focus:ring-gray-100/20"
            />
          </label>
        </div>

        <div className="mt-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Message
            <textarea
              name="message"
              placeholder="Tell me about your idea..."
              rows={5}
              required
              className="rounded-lg border border-gray-200 dark:border-[#232329] bg-gray-50 dark:bg-[#161616] px-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500/70 placeholder:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-900/30 dark:focus:ring-gray-100/20"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            I read every message. Expect a reply within 24-48 hours.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-black border border-black text-white px-6 py-2.5 text-sm font-semibold shadow hover:text-black dark:bg-white dark:text-black dark:hover:text-white transition-colors"
          >
            Send Message
          </button>
        </div>
        {result ? (
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            {result}
          </p>
        ) : null}
      </form>
      <div className="flex justify-center mt-6">
        <a
          href="/Sahilbajaj.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-4xl bg-blue-900 text-white dark:bg-blue-800 dark:text-white font-semibold shadow hover:bg-blue-950 dark:hover:bg-blue-700 transition-colors"
        >
          <span>Download Resume</span>
          <FaDownload className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
