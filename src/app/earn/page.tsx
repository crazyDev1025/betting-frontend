import Earn from "@/components/earn/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between text-white">
      <Earn/>  
    </main>
  );
}