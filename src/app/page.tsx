import Arrival from "@/components/arrival";
import Hero from "@/components/hero";
import TopSelling from "@/components/top-selling";
import Line from "@/components/line";
import Browser from "@/components/browser";
import OurCustomer from "@/components/reviews";
import HeroButtom from "@/components/herobuttom";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
   
      <Hero />
      <HeroButtom/>
      <Suspense>
      <Arrival />
      </Suspense>
      
      <Line />
      <Suspense>
      <TopSelling />
      </Suspense>
      
      <Browser />
      <OurCustomer />
  
    </div>
  );
}
