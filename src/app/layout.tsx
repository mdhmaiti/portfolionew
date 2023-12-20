import { ThemeProvider } from "@/components/navbar/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import EarthComponent from "@/components/ball/EarthComponent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Medhashis Maiti",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen min-w-screen ">
            
        
    <Navbar />
    <div className=" fixed inset-0 w-full -z-20">
          <EarthComponent />
        </div>

            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
