import type {  Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/component/layout/header";
import "@/assets/globals.css";
import type { Metadata } from 'next'


const inter = Inter({ subsets: ["latin"] });


  export const metadata: Metadata = {
    title: 'Kartheeswari',
    description: 'The personal portfolio',
    keywords: 'portfolio, web developer, frontend, javascript, nextjs,kartheeswari portfolio,kartheeswari',
   
    icons: {
      icon: {
        url: '/favicon.ico',
      
      }
    }
  }
  


export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className}  bg-slate-950  dark:bg-slate-100  h-100 w-100  mx-auto`}>
        <Header/>
        <main className="max-w-6xl px-4 py-16 mx-auto text-base md:px-2 lg:px-0 sm:pt-24 lg:pt-28"> 
            {children}
          </main>
    
      
      </body>
    </html>
  )
}
