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
        marginBottom: "80px"
      }}>
        <h2 style={{ letterSpacing: "3px" }}>VYBE</h2>
        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>Talent</span>
          <span>Apply</span>
          <span>Brands</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ marginBottom: "100px" }}>
        <h1 style={{
          fontSize: "70px",
          lineHeight: "1.1",
          maxWidth: "800px"
        }}>
          Where Brands Meet
          <br />
          Next-Gen Talent.
        </h1>

        <p style={{
          marginTop: "20px",
          fontSize: "20px",
          maxWidth: "600px",
          opacity: 0.9
        }}>
          Pune’s modern casting & modeling collaboration agency.
          Built for the social media era.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ marginBottom: "30px" }}>Featured Talent</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px"
        }}>
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} style={{
              height: "280px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)"
            }} />
          ))}
        </div>
      </section>

      {/* APPLY SECTION */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "60px"
      }}>

        <div>
          <h2>Apply as Talent</h2>
          <form style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
            <input placeholder="Full Name" style={inputStyle}/>
            <input placeholder="Instagram" style={inputStyle}/>
            <input placeholder="City" style={inputStyle}/>
            <input type="email" placeholder="Email" style={inputStyle}/>
            <button style={buttonStyle}>Apply Now</button>
          </form>
        </div>

        <div>
          <h2>Submit Casting Brief</h2>
          <form style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
            <input placeholder="Brand Name" style={inputStyle}/>
            <input placeholder="Campaign Type" style={inputStyle}/>
            <input placeholder="Budget Range" style={inputStyle}/>
            <textarea placeholder="Talent Requirements"
              style={{...inputStyle, height: "100px"}} />
            <button style={buttonStyle}>Submit Brief</button>
          </form>
        </div>

      </section>

    </main>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "black",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
