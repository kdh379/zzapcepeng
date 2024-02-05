import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import Header from "./layout/Header";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <div className={cn(
        "min-h-screen mx-auto px-8 bg-background antialiased"
      )}>
        <Header />
        {props.children}
      </div>
    </ThemeProvider>
  );
}