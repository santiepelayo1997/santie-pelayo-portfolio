import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingThemeToggle } from "@/components/floating-theme-toggle";

const roboto = Roboto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Santie Pelayo - Front End Developer",
  description: "My Portfolio showcasing my projects and skills.",
  icons: {
    icon: "/sp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <FloatingThemeToggle/>
        </ThemeProvider>
      </body>
    </html>
  )
}
