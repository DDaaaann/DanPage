// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/components/FloatingButtons.tsx

"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";
import ChatBox from "./ChatBox";

export default function FloatingButtons() {
  const [showContact, setShowContact] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // 控制鼠标悬停状态
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="fixed right-4 bottom-10 flex flex-col space-y-4 z-50">
      {/* 返回顶部按钮 */}
      <div className="relative flex flex-col items-center">
        {hoveredButton === "top" && (
          <span className="absolute bottom-16 bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg">
            Top
          </span>
        )}
        <button
          onMouseEnter={() => setHoveredButton("top")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
        >
          ↑
        </button>
      </div>

      {/* Contact 按钮 */}
      <div className="relative flex flex-col items-center">
        {hoveredButton === "contact" && (
          <span className="absolute bottom-16 bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg">
            Contact me
          </span>
        )}
        <button
          onMouseEnter={() => setHoveredButton("contact")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setShowContact(!showContact)}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
        >
          📩
        </button>
      </div>

      {/* ChatBox 按钮 */}
      <div className="relative flex flex-col items-center">
        {hoveredButton === "chat" && (
          <span className="absolute bottom-16 bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg">
            ChatBox
          </span>
        )}
        <button
          onMouseEnter={() => setHoveredButton("chat")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setShowChat(!showChat)}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
        >
          💬
        </button>
      </div>

      {/* Contact Form & ChatBox 组件 */}
      {showContact && <ContactForm close={() => setShowContact(false)} />}
      {showChat && <ChatBox close={() => setShowChat(false)} />}
    </div>
  );
}