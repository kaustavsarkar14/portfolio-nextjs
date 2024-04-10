import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { HoverBorderGradient } from "@/components/HoverBorderGradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
        >
          <nav className="flex p-4 justify-between" >
            <h1>My App</h1>
            <div className="flex gap-4 items-center" >

            <HoverBorderGradient>Github</HoverBorderGradient>
            <ModeToggle/>
            </div>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
