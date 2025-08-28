import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SAU DTI Calculator Varity",
  description: "เว็บรวมทุกๆอย่างไว้ในที่เดียวกัน *-* ",
  keywords: ["SAU", "DTI", "Calculator", "Varity", "BMI", "เครื่องคำนวณ"],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ name: "DTI", url: "https://sautechnology.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>{children}</body>
    </html>
  );
}
