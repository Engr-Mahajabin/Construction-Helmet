import "./globals.css";

export const metadata = {
  title: "Construction Helmet",
  description:
    "A simple construction site built with Next.js and Tailwind CSS and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
