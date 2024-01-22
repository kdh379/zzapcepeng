import { Noto_Sans_KR } from "next/font/google";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "./ThemeProvider";


const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export default function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={cn(
        "min-h-screen bg-background antialiased",
        notoSansKr.className
      )}>
        {props.children}
      </div>
    </ThemeProvider>
  );
}