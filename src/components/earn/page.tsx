import Image from "next/image";
import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
const Earn = () => {
  return (
    <main className="w-full pt-20 z-10 min-h-[700px]">
      <div className="relative m-3 py-2 px-4 rounded-lg  bg-[url('/images/boosts/back1.svg')] h-[150px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <img src="/images/boosts/backstars.svg" className="absolute"/>
        <div className="flex items-center">
          <img src="/images/game/coin.svg"></img>
          <div className="text-3xl font-bold text-yellow-400">4569</div>
        </div>
      </div>

      <div className="mt-5 bg-gradient-to-b from-[#0000005d] to-[#00000000] backdrop-blur-sm px-3 py-2 rounded-t-3xl border-t-4 border-blue-600 border-opacity-80 min-h-[500px]">
        <div className="text-white  text-xl font-bold py-4 w-full text-center">Earn more<span className="text-yellow-300 "> tokens</span></div>
        <div className="bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px] my-2"></div>
        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] hover:cursor-pointer hover:text-orange-400 backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-full">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/earn/calinder.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-center">Daily Reward</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className=" font-bold text-left text-yellow-300">2000</div>  
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <RiArrowRightSLine className="text-3xl"/>
          </div>
        </div>
        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] hover:cursor-pointer hover:text-orange-400 backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-full">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/earn/telegram.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-center">Join Group</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className=" font-bold text-left text-yellow-300">2000</div>  
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <RiArrowRightSLine className="text-3xl"/>
          </div>
        </div>
        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] hover:cursor-pointer hover:text-orange-400 backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-full">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/earn/twitter.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-left">Join X</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className=" font-bold text-left text-yellow-300">2000</div>  
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <RiArrowRightSLine className="text-3xl"/>
          </div>
        </div>
        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] hover:cursor-pointer hover:text-orange-400 backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-full">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/earn/MR.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-left">Buy Our Token</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className=" font-bold text-left text-yellow-300">2000</div>  
              </div>
            </div>
          </div>
          <div className="flex justify-left items-center">
            <RiArrowRightSLine className="text-3xl"/>
          </div>
        </div>
      </div>
      
      
    </main>
  );
}
export default Earn