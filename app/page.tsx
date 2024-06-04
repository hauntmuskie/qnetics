"use client";

import Navbar from "@/components/ui/navbar";
import { WobbleCardDemo } from "@/components/ui/wobble-card-demo";
import { CardStackDemo } from "@/components/ui/card-stack-demo";
import Footer from "@/components/ui/footer";
import { FlipWordsDemo } from "@/components/ui/flip-words-demo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-10 lg:p-0">
        <FlipWordsDemo />
      </div>
      <div className="p-10">
        <WobbleCardDemo />
      </div>
      <div className="p-10">
        <div className="flex justify-center text-center font-bold text-5xl">Testimoni klien kami.</div>
        <CardStackDemo />
      </div>
      <Footer />
    </div>
  );
}
