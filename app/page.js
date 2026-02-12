export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#ff0080,#7928ca)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          VYBE
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "700px", margin: "0 auto" }}>
          Pune’s modern casting & modeling collaboration agency.
          Connecting brands with the right talent.
        </p>
      </section>

      {/* MODEL PORTFOLIO GRID */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Featured Talent
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} style={{
              background: "white",
              height: "250px",
              borderRadius: "15px"
            }} />
          ))}
        </div>
      </section>

      {/* MODEL APPLICATION FORM */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Apply as a Model
        </h2>

        <form style={{ display: "grid", gap: "15px", maxWidth: "500px" }}>
          <input placeholder="Full Name" style={inputStyle}/>
          <input placeholder="Instagram Handle" style={inputStyle}/>
          <input placeholder="City" style={inputStyle}/>
          <input type="email" placeholder="Email" style={inputStyle}/>
          <button style={buttonStyle}>Submit Application</button>
        </form>
      </section>

      {/* BRAND CASTING FORM */}
      <section>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Submit Casting Requirement
        </h2>

        <form style={{ display: "grid", gap: "15px", maxWidth: "500px" }}>
          <input placeholder="Brand Name" style={inputStyle}/>
          <input placeholder="Campaign Type" style={inputStyle}/>
          <input placeholder="Budget Range" style={inputStyle}/>
          <textarea placeholder="Talent Requirements" style={{
            ...inputStyle,
            height: "100px"
          }} />
          <button style={buttonStyle}>Submit Request</button>
        </form>
      </section>

    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "black",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
