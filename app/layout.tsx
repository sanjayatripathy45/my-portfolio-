import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanjaya | Portfolio",
  description: "Sanjaya is a frony developer with 2 year of experince ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25] rounded-full sm:w-[68.75rem] blur-[10rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50.25] rounded-full sm:w-[68.75rem] blur-[10rem] md:left[-35rem] lg:left:[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>

        <Header />
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
