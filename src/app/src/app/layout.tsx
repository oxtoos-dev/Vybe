export const metadata = {
  title: "VYBE Casting",
  description: "Pune’s Bold Social-First Modeling & Casting Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
