// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/components/Hero.tsx

"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Video autoplay failed:", error));
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 个人介绍 */}
      <h1 className="text-5xl font-bold mb-6">Hi, I am Dan Li! 👋</h1>

      {/* 视频部分（自动播放 + 强制播放） */}
      <video
        ref={videoRef}
        className="w-1/3 md:w-1/4 lg:w-1/5 rounded-lg shadow-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/EmojiMovie.mp4" type="video/mp4" />
      </video>

      {/* 角色介绍 */}
      <div className="mt-6 text-lg font-semibold space-y-2">
        <p>I am a</p>
        <p>Data Analyst 📊</p>
        <p>Undergraduate Researcher 🧐</p>
        <p>Machine Learning Practitioner 💻</p>
        <p>Natural Language Processing Specialist 📑</p>
        <p>Photographer 📷</p>
      </div>
    </motion.div>
  );
}