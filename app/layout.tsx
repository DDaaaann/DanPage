// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/layout.tsx

import "../globals.css"; // 修正 Tailwind 样式导入
import Navbar from "./components/Navbar"; // 统一使用相对路径
import FloatingButtons from "./components/FloatingButtons";

export const metadata = {
  title: "Dan Li | Portfolio",
  description: "Dan Li's Personal Portfolio showcasing research, skills, and achievements.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <FloatingButtons />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}