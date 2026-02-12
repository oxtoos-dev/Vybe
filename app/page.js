export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#ff006e,#3a0ca3)",
      color: "white",
      fontFamily: "Helvetica, sans-serif",
      padding: "40px"
    }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "100px"
      }}>
        <h2 style={{ letterSpacing: "4px" }}>VYBE</h2>
        <div style={{ display: "flex", gap: "25px", fontSize: "14px" }}>
          <span>About</span>
          <span>Talent</span>
          <span>Work</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ marginBottom: "120px" }}>
        <h1 style={{
          fontSize: "72px",
          lineHeight: "1.1",
          maxWidth: "900px"
        }}>
          Pune’s Modern
          <br />
          Casting & Modeling Agency
        </h1>

        <p style={{
          marginTop: "25px",
          fontSize: "20px",
          maxWidth: "600px",
          opacity: 0.9
        }}>
          Connecting brands with India’s next-generation talent for
          fashion, commercial & social campaigns.
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "120px", maxWidth: "800px" }}>
        <h2 style={{ marginBottom: "20px" }}>About VYBE</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", opacity: 0.9 }}>
          Based in Pune, VYBE is a bold, culture-driven casting and
          collaboration agency built for the social media era.
          We represent emerging and professional Indian models while
          partnering with brands to create impactful visual campaigns.
        </p>
      </section>

      {/* TALENT GRID */}
      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ marginBottom: "30px" }}>Featured Talent</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px"
        }}>

          {models.map((model, index) => (
            <div key={index} style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)"
            }}>
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: 0 }}>{model.name}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{model.category}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WORK */}
      <section style={{ marginBottom: "120px", maxWidth: "800px" }}>
        <h2 style={{ marginBottom: "20px" }}>Selected Work</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", opacity: 0.9 }}>
          Campaign collaborations across fashion, beauty, lifestyle
          and digital-first brands across Maharashtra and India.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ maxWidth: "600px" }}>
        <h2 style={{ marginBottom: "20px" }}>Let’s Collaborate</h2>

        <p style={{ marginBottom: "20px", opacity: 0.9 }}>
          For talent representation or brand collaborations:
        </p>

        <p><strong>Email:</strong> hello@vybeagency.in</p>
        <p><strong>Instagram:</strong> @vybeagency</p>
        <p><strong>Location:</strong> Pune, India</p>
      </section>

    </main>
  );
}

const models = [
  {
    name: "Aarav Mehta",
    category: "Fashion Model",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    name: "Riya Sharma",
    category: "Commercial Model",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Kabir Singh",
    category: "Lifestyle Model",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Ananya Rao",
    category: "Beauty Model",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Vihaan Kapoor",
    category: "Editorial Model",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    name: "Maya Desai",
    category: "Digital Creator",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  }
];
