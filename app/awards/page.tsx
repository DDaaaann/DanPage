// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/awards/page.tsx

"use client";
import { motion } from "framer-motion";

export default function AwardsPage() {
  const awards = [
    {
      semester: "Spring 2025",
      position: "left",
      honors: [
        "Study Abroad Scholarship | Second Class, Wenzhou-Kean University",
        "Undergraduate Research Fellow Scholar | National Science Foundation Research Scholarships | Build and Broaden Program",
        "Research Scholar | Research Recruits Program, Kean University",
      ],
    },
    {
      semester: "Fall 2024",
      position: "right",
      honors: [
        "Undergraduate Research Fellow Scholar | National Science Foundation Research Scholarships | Build and Broaden Program",
        "Research Scholar | Research Recruits Program, Kean University",
      ],
    },
    {
      semester: "Summer 2024",
      position: "left",
      honors: [
        "Research Scholar | Freshman Research Initiative Program, Kean University Summer 2024",
      ],
    },
    {
      semester: "Fall 2022",
      position: "right",
      honors: [
        'Third-place Winner | "Bank of China Trophy" x United Nations Youth Group: Climate Change & Disaster Reduction Business Case Analysis Competition',
      ],
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10">Awards & Honors</h1>

      {/* 时间线 */}
      <div className="relative border-l-4 border-gray-300 ml-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className={`mb-10 flex ${award.position === "left" ? "flex-row-reverse" : "flex-row"} items-center`}
            initial={{ opacity: 0, x: award.position === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* 时间点 */}
            <div className="w-6 h-6 bg-black rounded-full absolute -left-3"></div>

            {/* 奖项内容 */}
            <div className={`w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg ${award.position === "left" ? "mr-8" : "ml-8"}`}>
              <h2 className="text-xl font-semibold mb-2">{award.semester}</h2>
              <ul className="list-disc list-inside">
                {award.honors.map((honor, idx) => (
                  <li key={idx} className="text-gray-700">{honor}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}