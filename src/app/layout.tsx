import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social",
  description: "Description from my social",
  robots: 'robots.txt',
  icons: '/logo.svg'
};

/* Новые функции next viewport */

export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        
        <LayoutClient>{children}</LayoutClient>
        
      </body>
    </html>
  );
}
