import Image from "next/image";

export default function HeaderSection() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-2">
          Hi, I&apos;m Sahil Bajaj{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900 dark:text-blue-200">
            Full Stack Developer
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 text-sm font-medium dark:bg-green-900 dark:text-green-200">
            Web3 Enthusiast
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-sm font-medium dark:bg-purple-900 dark:text-purple-200">
            Open Source
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">
            Freelancer
          </span>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I love to learn and share knowledge with the community.
          <br />
          Building modern web apps, exploring blockchain, and Learning new
          things.
        </p>
      </div>
      <div className="w-44 h-44 rounded-full overflow-hidden ml-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg">
        <Image
          src="/bajaj.jpg"
          alt="Sahil Bajaj"
          width={176}
          height={176}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
