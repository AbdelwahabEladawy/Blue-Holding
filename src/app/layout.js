
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";


// تحميل خط Inter باستخدام next/font/google
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <Head>
        <title>Abbott Landing</title>
        <meta
          name="description"
          content="A Next.js application with Google Fonts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
      {children}
      </body>
    </html>
  );
}
