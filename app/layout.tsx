import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego — Portfolio",
  description:
    "Portfolio profesional de Diego. Desarrollador Full Stack especializado en React, Next.js, Node.js y TypeScript. Creando aplicaciones web modernas y escalables.",
  keywords: [
    "desarrollador",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Diego" }],
  creator: "Diego",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Diego — Portfolio",
    description:
      "Portfolio profesional de Diego. Desarrollador Full Stack especializado en React, Next.js, Node.js y TypeScript.",
    siteName: "Diego Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego — Portfolio",
    description:
      "Portfolio profesional de Diego. Desarrollador Full Stack especializado en React, Next.js, Node.js y TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
