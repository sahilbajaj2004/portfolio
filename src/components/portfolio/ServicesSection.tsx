const services = [
	{
		title: "Full Stack Apps",
		description:
			"End-to-end web applications with thoughtful UX, solid APIs, and production-ready deployment.",
	},
	{
		title: "Frontend Apps",
		description:
			"Modern, responsive interfaces with clean component systems, fast performance, and polished interactions.",
	},
	{
		title: "Scalable Backend",
		description:
			"Secure, scalable services with database design, caching, and reliable integrations.",
	},
	{
		title: "Native Apps",
		description:
			"Cross-platform mobile apps with native-feeling UI, offline support, and smooth animations.",
	},
	{
		title: "Cloud & DevOps",
		description:
			"CI/CD pipelines, containerized deployments, and observability to keep systems healthy.",
	},
];

export default function ServicesSection() {
	return (
		<section className="mb-12">
			<div className="text-center mb-8">
				<div className="inline-block px-3 py-1 text-lg font-bold rounded-md mb-4 shadow border border-gray-200/80 dark:border-gray-700/80 bg-gray-900 text-white dark:bg-white dark:text-gray-900">
					Services
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold mb-2">What I Build</h2>
				<p className="text-gray-700 dark:text-gray-300 text-base max-w-2xl mx-auto">
					I design and ship reliable digital products focused on speed,
					clarity, and real-world outcomes.
				</p>
			</div>

			<div className="rounded-2xl border border-gray-200/80 dark:border-[#232329] bg-white/80 dark:bg-[#0f0f0f]">
				{services.map((service, index) => (
					<div
						key={service.title}
						className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-6 sm:px-8 py-6 border-b border-gray-200/80 dark:border-[#232329] last:border-b-0"
					>
						<div className="text-xs font-semibold text-gray-400 dark:text-gray-500 w-10">
							{String(index + 1).padStart(2, "0")}
						</div>
						<div className="flex-1">
							<h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
								{service.title}
							</h3>
						</div>
						<p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl">
							{service.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
