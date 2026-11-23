import "./globals.css";
import { Playfair_Display, Lora } from "next/font/google";
import { CONFIG } from "@/lib/config";

const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const bodyFont = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata = {
  title: `For ${CONFIG.name}`,
  description: "A little birthday surprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${bodyFont.variable}`}>
      <body className="font-body text-wine-900">{children}</body>
    </html>
  );
}
