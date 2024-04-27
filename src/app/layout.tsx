import type { Metadata } from "next";
import "./globals.css";
import GlobalLayoutProvider from "@/components/common/GlobalLayoutProvider";

export const metadata: Metadata = {
  title: "Trails: Stock Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="trails">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className='h-screen w-screen'>
        <GlobalLayoutProvider>
          {children}
        </GlobalLayoutProvider>
      </body>
    </html>
  );
}
