import type { Metadata } from "next";
import { akkurat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movies App",
  description: "A list of popular movies from TMDb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={akkurat.variable}>{children}</body>
    </html>
  );
}
