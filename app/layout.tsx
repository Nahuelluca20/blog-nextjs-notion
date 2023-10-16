import "./globals.css";
import type {Metadata} from "next";

import {Inter} from "next/font/google";

import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Blog Notion",
  description: "Blog NextJS + Notion + TailwindCSS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
