import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { MobileCTA } from "@/components/mobile-cta";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeroluxe - Fly Without Limits",
  description: "Luxury private jet booking. Experience the pinnacle of air travel with our Lagos-based fleet.",
  keywords: ["private jet", "luxury travel", "aeroluxe", "private aviation", "lagos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <MobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}

