import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
// import "swiper/css";
// import "swiper/css/thumbs";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "@/app/globals.css";
// import "swiper/css";
// import "swiper/css/navigation";

// import "swiper/swiper-bundle.css";

import NavBar from "@/components/Navigation Components/NavBar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
