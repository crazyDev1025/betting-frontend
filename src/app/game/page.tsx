import Game from "@/components/game/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between text-white">
      <div className=" top-0 fixed w-full h-[40vh] bg-[url('/images/game/back1.svg')] bg-cover bg-center bg-no-repeat -z-10">
      </div>
      
      <div className=" bottom-0 fixed w-full h-[100vh] bg-[url('/images/game/back2.svg')] bg-cover bg-center bg-no-repeat -z-10">
      </div>
      
      <div className="w-full">
        <Game/>
      </div>

     
    </main>
  );
}
