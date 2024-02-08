import "./globals.css";

import { Metadata } from "next/types";

import Providers from "@/components/Provider";



export const metadata: Metadata = {
  title: "짭이스펭",
  description: "로스트아크 각인 계산기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
