const experience = [
  {
    role: "Full-Stack & Mobile Application Developer",
    company: "Parkida · Product development",
    date: "Jun 2026 – Present",
    description:
      "Building an Android-first parking platform across a React Native app, Firebase-backed services, and a bilingual marketing website. Work includes facility management, role-based access, vehicle sessions, reporting, assisted plate recognition, and receipt printing.",
  },
  {
    role: "Freelance Web Developer",
    company: "Freelance · Dubai",
    date: "Feb 2024 – Feb 2026",
    description:
      "Delivered web applications for small businesses, translating client requirements into responsive interfaces. Managed database integration, testing, and deployment throughout the project lifecycle.",
  },
  {
    role: "Data Entry & Customer Service",
    company: "Hexaware · Dubai",
    date: "Feb 2023 – Feb 2024",
    description:
      "Maintained accurate customer records, handled inquiries, and troubleshot basic technical issues. Developed clear communication and structured problem-solving skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="content-width">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={item.role}
                className="border-l-2 border-blue-200 dark:border-blue-900 pl-5 sm:pl-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 shrink-0">
                    {item.date}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                  {item.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
