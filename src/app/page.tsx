import type { Metadata } from "next";

import GlobalLayoutProvider from "@/components/common/GlobalLayoutProvider";
import LandingHero from "@/components/resources/landing/hero";
import HeadTag from "@/components/common/HeadTag";

export const metadata: Metadata = {
  title: "Trails | Welcome to the future of stock trading!",
};

export default function Home() {
  return (
    <GlobalLayoutProvider>
      <HeadTag description="Create Your Free Account Now!" icon="information-line" containerStyle="bg-info text-info-content"/>
      <LandingHero />
    </GlobalLayoutProvider>
  );
}
