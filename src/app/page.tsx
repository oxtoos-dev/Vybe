"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const models = [
    {
      name: "Aarav Mehta",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Riya Kapoor",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Kabir Sharma",
      category: "Influencer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  return (
    <main style={{ background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)", minHeight: "100vh", color: "white", fontFamily: "sans-serif" }}>

      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "60px", marginBottom: "20px" }}
        >
          VYBE Casting
        </motion.h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Pune’s Bold Social-First Modeling & Casting Agency
        </p>
        <div>
          <button style={{ marginRight: "10px", padding: "12px 25px", borderRadius: "20px", border: "none", background: "white", color: "#8b5cf6", fontWeight: "bold" }}>
            Book Talent
          </button>
          <button style={{ padding: "12px 25px", borderRadius: "20px", border: "none", background: "black", color: "white", fontWeight: "bold" }}>
            Apply as Model
          </button>
        </div>
      </section>

      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>Featured Talent</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {models.map((model, i) => (
            <div key={i} style={{ background: "white", color: "black", borderRadius: "20px", overflow: "hidden", width: "300px" }}>
              <img src={model.image} alt={model.name} style={{ width: "100%", height: "350px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <h3>{model.name}</h3>
                <p>{model.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "black", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>Let’s Collaborate</h2>
        <p><MapPin size={16}/> Pune, India</p>
        <p><Mail size={16}/> hello@vybecasting.com</p>
        <p><Phone size={16}/> +91 90000 00000</p>
        <button style={{ marginTop: "30px", padding: "12px 25px", borderRadius: "20px", border: "none", background: "#ec4899", color: "white", fontWeight: "bold" }}>
          <Instagram size={16}/> @vybecasting
        </button>
      </section>

    </main>
  );
}
