import Bets from "@/components/bets/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between text-white">
      <img src={"/images/bets/backtop.svg"} alt='' className=" fixed w-full -z-40" />
      <img src={"/images/bets/backbottom.svg"} alt='' className=" bottom-0 fixed w-full -z-40" />
      <Bets/>  
    </main>
  );
}
