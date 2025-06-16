import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries Explorer",
  description: "Explore countries around the world with detailed information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
