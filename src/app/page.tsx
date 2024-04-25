import GlobalLayoutProvider from "@/components/common/GlobalLayoutProvider";
import LandingHero from "@/components/resources/landing/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <GlobalLayoutProvider>
      <LandingHero />
    </GlobalLayoutProvider>
  );
}
