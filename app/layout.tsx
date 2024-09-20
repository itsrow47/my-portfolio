import Navbar from "../components/navbar";
import { ThemeProvider } from "../components/theme-provider";
import { TooltipProvider } from "../components/ui/tooltip";
import { DATA } from "../data/resume";
import { cn } from "../lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Grid from "../components/ui/grid";
import { Dock, DockIcon } from "../components/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { ModeToggle } from "../components/mode-toggle";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  openGraph: {
    title: `${DATA.name}`,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark:text-white max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            <div className="dark:bg-white/50 h-28 w-28 blur-3xl absolute top-20 -z-10 left-1/2 -translate-x-1/2"></div>
            <Grid></Grid>
            <Navbar />
            <div className="z-30 fixed pointer-events-none bottom-4 left-4 w-max mx-auto flex h-full max-h-14 lg:hidden">
              <Dock className="pointer-events-auto mx-auto flex h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
                <DockIcon>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <ModeToggle />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Theme</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              </Dock>
            </div>
            <div className="mt-20 lg:mt-10 w-full max-w-2xl mx-auto">
              {children}
            </div>

            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
