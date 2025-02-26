// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/experience/page.tsx

"use client";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Peer Tutor",
      organization: "Mathematics Department | Kean University",
      date: "2024.09 – Present",
      description: "Provide tutoring support for students, offering guidance on coursework, exam preparation, and personalized learning strategies.",
      position: "left",
    },
    {
      title: "Intern",
      organization: "NJ Statewide Comprehensive Traffic Safety Program | NJ DMV",
      date: "2024.05 – 2024.09",
      description: "Assisted with Grade 10 Driver Education curriculum, Brain Injury Alliance CRASH Project, and community engagement.",
      position: "right",
    },
    {
      title: "Research Assistant",
      organization: "Holocaust Resource Center and Human Rights Institute | Kean University",
      date: "2024.09 – 2025.04",
      description: "Researcher for 'Through Their Words: Analyzing Themes and Emotions in Holocaust Survivor Testimonies' under Dr. Adara Goldberg.",
      position: "left",
    },
    {
      title: "Student Assistant",
      organization: "Management Department Office | Kean University",
      date: "2024.05 – 2024.09",
      description: "Provided administrative support, managed documents, and assisted with event coordination in a fast-paced environment.",
      position: "right",
    },
    {
      title: "Photographer",
      organization: "Moment Department, Student Media & Design Center | Kean University",
      date: "2022.09 – 2024.06",
      description: "Created promotional media projects, increasing university media reach. Key projects: 'Kean University President’s Visit to China' and 'GHK Landmark Architecture Special Promo Video.'",
      position: "left",
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10">Experience</h1>

      {/* 时间线 */}
      <div className="relative border-l-4 border-gray-300 ml-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-10 flex ${exp.position === "left" ? "flex-row-reverse" : "flex-row"} items-center`}
            initial={{ opacity: 0, x: exp.position === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* 时间点（黑色） */}
            <div className="w-6 h-6 bg-black rounded-full absolute -left-3"></div>

            {/* 经验内容（卡片） */}
            <div className={`w-1/2 min-h-40 p-6 bg-gray-100 rounded-lg shadow-lg ${exp.position === "left" ? "mr-8" : "ml-8"}`}>
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-gray-600 font-medium">{exp.organization}</p>
              <p className="text-gray-500 text-sm">{exp.date}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}