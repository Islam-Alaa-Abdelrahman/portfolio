"use client";

import { motion } from "framer-motion";

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Web & Mobile",
      skills: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        "Firebase",
        "Firestore",
        "Cloud Functions",
        "Node.js",
        "SQL",
        "MongoDB",
      ],
    },
    {
      title: "Additional Technologies",
      skills: ["PHP", "Laravel", ".NET", "C", "C++", "Java"],
    },
    {
      title: "Development Practice",
      skills: [
        "Requirements Analysis",
        "Responsive Design",
        "Testing",
        "Debugging",
        "Deployment",
        "Agile Development",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="content-width"
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCategory
                  title={category.title}
                  skills={category.skills}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
