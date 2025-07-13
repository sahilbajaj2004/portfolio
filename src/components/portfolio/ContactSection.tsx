import { FaDownload } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="text-center mb-0">
      <div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
        Contact
      </div>
      <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
      <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
        Want to chat? Just shoot me a DM with a direct question on
        <br />
        Twitter and I&apos;ll respond whenever I can. I will ignore all
        <br />
        soliciting.
      </p>
      <div className="flex justify-center mt-6">
        <a
          href="/SahilBajajResume.pdf"
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
