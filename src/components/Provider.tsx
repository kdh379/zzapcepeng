import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Providers(props: PropsWithChildren) {
  return (
    <div className={inter.className}>
      {props.children}
    </div>
  );
}