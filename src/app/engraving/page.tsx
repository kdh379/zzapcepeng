import { Metadata } from "next";

import EngravingPage from "@/components/pages/EngravingPage";

export const metadata: Metadata = {
  title: "각인 계산기",
};

const Engraving = () => <EngravingPage />;

export default Engraving;