import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';
import "primereact/resources/themes/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import PublicLayout from "./component/public_layout/PublicLayout";
import Layout from "./component/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const {orgId} = auth();
  return (
     <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <>
       { orgId? <Layout>{children}</Layout> : <PublicLayout>{children}</PublicLayout> } 
        </>       
      </body>
    </html>
    </ClerkProvider>

  );
}
