import ScrollToTop from "@/components/ScrollToTop";
import { pirata } from "../public/fonts";
import "./globals.css";



export const metadata = {
  title: "THE TRIESTE",
  description: "At THE TRIESTE, every dish is crafted with care, and every flavor tells a story.",
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pirata} font-rambla`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
