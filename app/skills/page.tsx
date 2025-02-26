"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Software Development",
    items: [
      { name: "React.js", img: "/sk1.jpeg" },
      { name: "Next.js", img: "/sk2.jpeg" },
      { name: "TypeScript", img: "/sk3.jpeg" },
      { name: "JavaScript", img: "/sk4.jpeg" },
      { name: "HTML5", img: "/sk5.jpeg" },
      { name: "Tailwind CSS", img: "/sk6.jpeg" },
      { name: "Node.js", img: "/sk7.jpeg" },
      { name: "MySQL", img: "/sk8.jpeg" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    items: [
      { name: "Python", img: "/sk9.jpeg" },
      { name: "Java", img: "/sk10.jpeg" },
      { name: "VS Code", img: "/sk11.jpeg" },
      { name: "R", img: "/sk12.jpeg" },
      { name: "MATLAB", img: "/sk13.jpeg" },
      { name: "Hugging Face", img: "/sk14.jpeg" },
      { name: "OpenAI GPT", img: "/sk15.jpeg" },
    ],
  },
  {
    category: "Design & Productivity",
    items: [
      { name: "Adobe Photoshop", img: "/sk16.jpeg" },
      { name: "Adobe Audition", img: "/sk17.jpeg" },
      { name: "Lightroom", img: "/sk18.jpeg" },
      { name: "Canva", img: "/sk19.jpeg" },
      { name: "Microsoft Teams", img: "/sk20.jpeg" },
      { name: "Microsoft Word", img: "/sk21.jpeg" },
      { name: "Microsoft Excel", img: "/sk22.jpeg" },
      { name: "PowerPoint", img: "/sk23.jpeg" },
      { name: "Google Drive", img: "/sk24.jpeg" },
      { name: "Google Meet", img: "/sk25.jpeg" },
    ],
  },
];

const contacts = [
  { name: "LinkedIn", img: "/linkedin.jpeg", link: "https://www.linkedin.com/in/dan-li-758549315" },
  { name: "GitHub", img: "/github.jpeg", link: "https://github.com/DDaaaann" },
  { name: "Gmail", img: "/gmail.jpeg", link: "mailto:your-email@gmail.com" },
  { name: "Phone", img: "/phone.jpeg", link: "tel:+1234567890" },
];

export default function SkillsPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">Skills</h1>

      {/* 遍历技能分类 */}
      {skills.map((skillCategory, index) => (
        <div key={index} className="w-full mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">{skillCategory.category}</h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {skillCategory.items.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Image src={skill.img} alt={skill.name} width={60} height={60} />
                <p className="text-sm mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Contact Me */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact me?</h2>
        <div className="flex space-x-8">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2 }}
            >
              <Image src={contact.img} alt={contact.name} width={50} height={50} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* 额外留白区域 */}
      <div className="h-32"></div>
    </motion.div>
  );
}