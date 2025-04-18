import type { Metadata } from "next";
import { Geist, Geist_Mono, Comforter } from "next/font/google";


import "./globals.css";

/* 今天我们来学习如何使用Nextjs提供的字体函数来优化字体，使用方法大致有两种：加载nextjs内置的字体（其实是google的内置字体）；加载外部引入的字体文件 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 引入Google内部字体
const comforter = Comforter({
  subsets: ["latin"],
  weight: ["400"],
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${comforter.className}`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
