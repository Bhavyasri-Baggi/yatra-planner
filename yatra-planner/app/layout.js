export const metadata = {
  title: "YatraONE",
  description: "Plan your Yatra trips with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
