// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/about/page.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-32 space-y-6 md:space-y-0 md:space-x-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* 左侧 - 文本内容 */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-4xl font-bold mb-6">About Dan</h1>
        <p className="text-lg leading-relaxed">
          I am <strong>Dan Li</strong> (Chinese name <strong>李丹</strong>), a math student with an insatiable curiosity for uncovering patterns, solving problems, and exploring the unknown! 
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Born and raised in <strong>Taiyuan, Shanxi</strong>, a city where the aroma of aged vinegar lingers in the air and where noodles take on hundreds of different shapes, I developed a keen sensitivity to numbers and an analytical mindset from an early age.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Currently, I am a <strong>junior at Kean University</strong>, majoring in Mathematics with a minor in Computer Science.
        </p>
      </div>

      {/* 右侧 - 图片 */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/about_dan.jpeg" // 你的图片路径
          alt="Dan Li"
          width={400} // 图片宽度，可调整
          height={500} // 图片高度，可调整
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
}