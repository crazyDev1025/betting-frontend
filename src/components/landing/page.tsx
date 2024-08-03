// import Game from "@/components/game/page";
"use client";
import Image from "next/image";
import Autoslider from"./AutoSlider";
const Landing: React.FC = () => {
  return (
    <main className="w-full z-10">
      <Autoslider/>
    </main>
  );
}
export default Landing;