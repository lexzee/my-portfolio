import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexzee.vercel.app"),

  title: {
    default: "Lexzee",
    template: "%s | Lexzee",
  },
  openGraph: {
    title: "Lexzee",
    description:
      "Full Stack Developer specializing in scalable Web3 and React applications.",
    url: "https://lexzee.vercel.app",
    siteName: "Lexzee's Portfolio",
    locale: "en-NG",
    type: "website",
  },
  description:
    "Full Stack Developer specializing in scalable Web3 and React applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
