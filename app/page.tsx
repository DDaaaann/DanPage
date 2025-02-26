"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AboutPage from "./about/page"; 
import AwardsPage from "./awards/page"; 
import PublicationsPage from "./publications/page"; 
import ExperiencePage from "./experience/page"; 
import SkillsPage from "./skills/page"; 

export default function Home() {
  return (
    <div className="text-center">
      <Hero />

      {/* About Dan 内容 */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <AboutPage />
      </motion.section>

      {/* Awards & Honors 内容 */}
      <motion.section
        id="awards"
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <AwardsPage />
      </motion.section>

      {/* Publications 内容 */}
      <motion.section
        id="publications"
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PublicationsPage />
      </motion.section>

      {/* Experience 内容 */}
      <motion.section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ExperiencePage />
      </motion.section>

      {/* Skills 内容 */}
      <motion.section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <SkillsPage />
      </motion.section>
    </div>
  );
}