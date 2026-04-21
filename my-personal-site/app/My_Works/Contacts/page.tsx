"use client";
import { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🚫 block if already sending or cooldown active
    if (isSending || cooldown > 0) return;

    setIsSending(true);

    try {
      const res = await fetch(
        "https://protfolio-site-7inq.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        alert("Message sent ✅");

        // reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });

        // ⏳ start 15 sec cooldown
        setCooldown(10);

        const timer = setInterval(() => {
          setCooldown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        alert("Failed ❌");
      }
    } catch (err) {
      alert("Error sending message ❌");
      console.error(err);
    } finally {
      setIsSending(false);
    }
};
  

  return (
    <section className="relative min-h-screen rounded-b-3xl bg-[#050507] text-white flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* 🌌 ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[160px] -z-10" />

      <div className="w-full max-w-5xl">

        {/* 🧠 Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
              Connect
            </span>
          </h2>

          <p className="text-white/40 mt-4 text-lg">
            Got an idea, project, or opportunity? Let’s make it real.
          </p>
        </div>

        {/* 🚀 Card */}
        <div className="grid md:grid-cols-2 gap-10 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 hover:border-white/20">

          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-purple-300">
              Get in Touch
            </h3>

            <p className="text-white/40 leading-relaxed">
              I’m open to freelance work, collaborations, and interesting ideas.
              If you have something in mind, send a message — let’s build
              something meaningful.
            </p>
            <p className=" leading-relaxed">It takes some time to send the message so please be patient.</p>

            <div className="space-y-3 text-sm text-white/60">
              <p>📍 Kathmandu, Nepal</p>
              <p>📧 adhritsigdel@gmail.com</p>
              <p>📱 9863237342</p>
            </div>

            <div className="pt-4 text-white/30 text-sm">
              Usually reply within 4.0 hours ⚡
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-white/40">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 
                outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-white/40">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 
                outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-white/40">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 
                focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 
                outline-none transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black font-medium 
              hover:bg-white/90 transition-all duration-300 
              hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              disabled={isSending || cooldown > 0}
            >
              {isSending
                ? "Sending..."
                : cooldown > 0
                ? `Wait ${cooldown}s`
                : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}