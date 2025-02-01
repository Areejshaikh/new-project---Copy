import Arrival from "@/components/arrival";
import Hero from "@/components/hero";
import TopSelling from "@/components/top-selling";
import Line from "@/components/line";
import Browser from "@/components/browser";
// import OurCustomer from "@/components/reviews";
import HeroButtom from "@/components/herobuttom";
import { Suspense } from "react";

import { MarqueeDemo } from "@/components/reviews";
import GalleryPage from "@/components/arrival";
export default function Home() {
  return (
    <div>
      <Hero />
      <HeroButtom/>
      <Suspense>
      <Arrival />
      </Suspense>
      <Suspense>
      <TopSelling />
      </Suspense>
      <MarqueeDemo/>
      <Browser />
    </div>
  );
}




