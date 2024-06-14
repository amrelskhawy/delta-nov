import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "أكاديمية الدلتا",
  description: "أكاديمية الدلتا للتدريب و التنمية البشرية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.className}>{children}</body>

     
    </html>
  );
}
