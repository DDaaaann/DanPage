// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/publications/page.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PublicationsPage() {
  const publications = [
    {
      title: "A Comprehensive Review of AI Advancement Using testFAILS and testFAILS-2 for the Pursuit of AGI",
      role: "Co-author",
      adviser: "Dr. Kumar, Dr. Jenny Li",
      journal: "Electronics",
      manuscriptID: "Electronics-3224818",
      doi: "https://doi.org/10.3390/electronics13244991",
      keywords: "AI evaluation, testFAILS-2, artificial general intelligence, multimodal AI, AI linguistic systems",
      image: "/pic1.jpeg", // 请替换为实际图片路径
      position: "left",
    },
    {
      title: "Privacy Dataset Distillation for Medical Imaging Using Class Centralization and Covariance Matching for OCTMNIST",
      role: "Co-author",
      journal: "SPIE Digital Library",
      conference: "2024 4th International Conference on Advanced Algorithms and Signal Image Processing (AASIP 2024)",
      doi: "http://dx.doi.org/10.1117/12.3045706",
      keywords: "Deep learning, Privacy-preserving dataset distillation, OCTMNIST dataset, Medical imaging, Image synthesis, Model stability",
      image: "/pic2.jpeg", // 请替换为实际图片路径
      position: "right",
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10">Publications</h1>

      {/* 论文卡片布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className={`bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${
              pub.position === "left" ? "md:justify-self-start" : "md:justify-self-end"
            }`}
            initial={{ opacity: 0, x: pub.position === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* 图片 */}
            <Image
              src={pub.image}
              alt={pub.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />

            {/* 论文信息 */}
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <p className="text-gray-600 mt-2">
              <strong>Role:</strong> {pub.role}
            </p>
            {pub.adviser && (
              <p className="text-gray-600">
                <strong>Adviser:</strong> {pub.adviser}
              </p>
            )}
            <p className="text-gray-600">
              <strong>Journal:</strong> {pub.journal}
            </p>
            {pub.conference && (
              <p className="text-gray-600">
                <strong>Conference:</strong> {pub.conference}
              </p>
            )}
            <p className="text-gray-600">
              <strong>DOI:</strong>{" "}
              <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {pub.doi}
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Keywords:</strong> {pub.keywords}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}