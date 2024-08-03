import Image from "next/image";
import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { RiArrowRightSLine, RiUserAddLine } from "react-icons/ri";
const Friends = () => {
  return (
    <main className="w-full pt-20 z-10 min-h-[700px]">
      <div className="relative m-3 py-2 px-4 rounded-lg  bg-[url('/images/friends/back1.svg')] h-[150px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <img src="/images/boosts/backstars.svg" className="absolute"/>
        <div className="flex items-center">
          <img src="/images/game/coin.svg"></img>
          <div className="text-3xl font-bold text-yellow-400">4569</div>
        </div>
      </div>
      <div className="w-full text-center text-xl text-yellow-300 font-bold">Invite firends!</div>
        <div className="w-full text-center text-xl ">You and your friend will receive bonuses</div>
      <div className="m-5 text-xl font-bold py-2 text-center bg-[#FFC700] rounded-xl border-[1px] border-[#FFC700] text-[#021E45] flex justify-center items-center hover:bg-opacity-80 hover:text-white hover:cursor-pointer">Invite a Friend <RiUserAddLine /></div>

      <div className="mt-2 bg-gradient-to-b from-[#0000005d] to-[#00000000] backdrop-blur-sm px-3 py-2 rounded-t-3xl border-t-4 border-blue-600 border-opacity-80 min-h-[500px]">
        

        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-xl">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/friends/reward1.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-left pl-2">Invite a friend</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className=" text-left text-yellow-300"><span className="text-yellow-300">+5k</span> for you and your friend</div>  
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-t from-[#005cdca8] to-[#003176a8] backdrop-blur-xl flex justify-between px-4 py-1 my-4 rounded-xl">
          <div className="flex items-center">
            <div className=" ">
              <img
                src="/images/friends/reward2.svg"
                className="w-[40px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-left pl-2">Invite a friend with Telegram Premium</div>
              <div className="flex items-center">
                <img src="/images/game/coin.svg" className="h-[30px]"/>
                <div className="text-left text-yellow-300"><span className="text-yellow-300">+25k</span> for you and your friend</div>  
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px] my-2"></div>
        <div className="text-xl text-center">Invited Friends :</div>
        <div className="w-full bg-[#003176a8] hover:cursor-pointer backdrop-blur-xl flex justify-between px-4 py-4 my-4 rounded-xl">
          <div className="w-full text-center">You haven&apos;t invited new anyone yet.</div>
        </div>
      </div>
      
      
    </main>
  );
}
export default Friends