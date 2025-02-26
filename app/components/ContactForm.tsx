// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/components/ContactForm.tsx

"use client";
import { useState } from "react";

export default function ContactForm({ close }: { close: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" }); // 清空表单
    close(); // 关闭表单
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-4"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 w-full mb-4"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="border p-2 w-full mb-4"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="flex justify-between">
            <button type="button" onClick={close} className="bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}