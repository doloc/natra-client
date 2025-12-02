'use client'

import Header from "./components/header";
import SideTab from "./components/side-tab";
import { useRef } from "react";
import Hero from "./components/hero";
import SectionPrivilege from "./components/section-privilege";
import SectionRewards from "./components/section-rewards";
import SectionInviteFriend from "./components/section-invite-friend";
import SpecialFeatures from "./components/section-special-features";
import SectionReferences from "./components/section-references";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f0f6e8] text-gray-800" >
      <div ref={topRef}></div>
      <Header/>
      <Hero />
      <SectionPrivilege />
      <SectionRewards />
      <SectionInviteFriend />
      <SpecialFeatures />
      <SectionReferences />
      <SideTab onScrollToTop={scrollToTop}/>
    </div>
  );
}
