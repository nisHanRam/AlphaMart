import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/LandingNav/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/themetoggle";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlphaMart",
  description: "Empower Your Creativity with Premium Digital Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <NavbarDemo/>

        <main>
      
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
       
        
          </main>
      </body>
    </html>
  );
}
