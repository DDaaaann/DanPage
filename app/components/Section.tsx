// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/components/Section.tsx

"use client";
import { motion } from "framer-motion";

export default function Section({ title }: { title: string }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold">{title}</h2>
    </motion.div>
  );
}