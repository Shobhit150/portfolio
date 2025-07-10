import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "Shobhit Verma - Portfolio Website",
  description: "All my personal project, education background, skills and hackathon and skill i participated in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
