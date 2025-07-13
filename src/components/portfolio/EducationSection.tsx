import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">Education</h2>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden mr-2">
          <Image
            src="/logos/college.png"
            alt="University Logo"
            width={40}
            height={40}
            className="object-contain w-9 h-9"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg">
                Bachelor of Computer Applications
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Institute of Management Education, Sahibabad (CCS University)
              </p>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              2024 - 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
