import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import theme from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Providers(props: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme}>
      <Flex className={inter.className}>
        {props.children}
      </Flex>
    </ChakraProvider>
  );
}