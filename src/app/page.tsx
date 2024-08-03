"use client";
import Landing from "@/components/landing/page";
// import TeamSlider from "@/components/landing/TeamSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <div className="top-0 fixed w-full min-h-[20vh] bg-[url('/images/game/back1.svg')] bg-cover bg-center bg-no-repeat -z-0">
      </div>
      <div className="top-0 fixed w-full min-h-[50vh] bg-[url('/images/game/back2.svg')] bg-cover bg-center bg-no-repeat -z-0">
        
          <Landing/>
        
        
      </div>
      <div className="bottom-0 fixed w-full h-[50vh] bg-[url('/images/home/back2.svg')] backdrop-blur-xl bg-cover bg-center bg-no-repeat -z-0 flex justify-center items-center">
        <img src="/images/boosts/backstars.svg" className="absolute top-10 w-full opacity-50 -z-10" />
        <div className="absolute w-full top-0 bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px]"></div>
        <div className="pb-10">
          <div className="text-yellow-400 text-3xl text-center font-bold pb-5">Hi, am ETO&apos;O Fils Bot</div>
          <div className="text-center text-white pb-2">Choose your Preferred option from bellow.</div>
          <Link href={"/game"}><div className="bg-yellow-400 text-center my-2 py-2 rounded-lg font-bold text-xl hover:bg-opacity-80 border-[1px] border-yellow-400 hover:cursor-pointer">Play Now</div></Link>
        </div>
      </div>
      
      <div className="relative z-[-1]">
        {/* <Landing/> */}
      </div>

     
    </main>
  );
}
