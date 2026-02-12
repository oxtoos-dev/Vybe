export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#ff0080,#7928ca)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        VYBE
      </h1>
      <p style={{ fontSize: "20px", maxWidth: "600px" }}>
        Pune’s modern casting & modeling collaboration agency.
        Connecting brands with talent.
      </p>
    </main>
  );
}
