export const metadata = {
  title: "Vybe Modeling Agency | Pune, India",
  description: "Casting collaborations & modeling management."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
