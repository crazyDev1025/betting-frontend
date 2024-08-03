import Image from "next/image";
import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
const Boosts = () => {
  return (
    <main className=" w-full pt-20 z-10 min-h-[800px]">
      
      <div className="relative m-3 py-2 px-4 rounded-lg  bg-[url('/images/boosts/back2.svg')] h-[150px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <img src="/images/boosts/backstars.svg" className="absolute"/>
        <div className="flex items-center">
          <img src="/images/game/coin.svg"></img>
          <div className="text-3xl font-bold text-yellow-400">4569</div>
        </div>
      </div>
      <div className="flex justify-between m-3 py-2 gap-x-5">
        <div className="w-1/2 border-[1px] border-red-500 text-white-400 text-left px-5 py-1 bg-red-800 bg-opacity-40 backdrop-blur-lg  rounded-lg hover:cursor-pointer hover:text-white hover:bg-opacity-80">
          <div className="">Damage</div>
          <div className="text-[12px]">+1</div>
        </div>
        <div className="w-1/2 border-[1px] border-green-500 text-white-400 text-left px-5 py-1 bg-green-800 bg-opacity-40 backdrop-blur-lg  rounded-lg hover:cursor-pointer hover:text-white hover:bg-opacity-80">
          <div className="">Energy Cap</div>
          <div className="text-[12px]">+5</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px] my-2"></div>

      <div className="m-3 bg-[#FFB800]  px-3 py-2 rounded-xl">
        <div className="text-[#021E45] text-xl font-bold">Free Boosts</div>
        <div className=" flex justify-stretch gap-3 ">
          <div className="w-1/2 bg-[#021E45] backdrop-blur-xl border-[1px] border-yellow-300 flex justify-center rounded-l-full hover:text-white hover:cursor-pointer hover:bg-opacity-80">
            <div className="mx-auto bg-gray-600 bg-opacity-60 rounded-full m-1 p-1">
              <img
                src="/images/game/shoes.svg"
                className="w-[30px] "
              />
            </div>
            <div className="mx-auto flex items-center">
              <div>
              <div className="text- font-bold text-center">Power</div>
              <p className="text-sm text-right justify-end text-gray-300 flex items-center"> <span className="text-yellow-300 font-bold">1</span>&nbsp; / 8</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 grow bg-[#021E45] backdrop-blur-xl border-[1px] border-yellow-300 flex justify-center rounded-r-full hover:text-white hover:cursor-pointer hover:bg-opacity-80">
            <div className="mx-auto flex items-center">
              <div className="">
              <div className=" text-white font-bold text-center">Recharge</div>
              <p className="text-sm text-right text-gray-400 flex items-center justify-right"><span className="text-yellow-300 font-bold">3</span> &nbsp;/ 3</p>
              </div>
            </div>
            <div className="mx-auto bg-gray-600 bg-opacity-70  rounded-full m-1 p-1">
              <img
                src="/images/boosts/recharge.svg"
                className="w-[30px] "
              />
            </div>

          </div>
        </div>
      </div>
      <div className="m-3 bg-[#FFB800]  px-3 py-2 rounded-xl">
        <div className="text-[#021E45] text-xl font-bold">Upgrades</div>

        <div className="w-full bg-[#021E45] backdrop-blur-xl border-[1px] border-yellow-300 flex justify-between px-4 py-1 rounded-full hover:text-white hover:cursor-pointer hover:bg-opacity-80 my-1">
            <div className="flex">
              <div className=" bg-gray-600 bg-opacity-60 rounded-full m-1 p-1">
                <img
                  src="/images/game/shoes.svg"
                  className="w-[30px] "
                />
              </div>
              <div className="px-5">
                <div className="font-bold text-left">Power</div>
                <p className="text-sm text-left justify-end text-gray-300"> <span className="text-yellow-300 font-bold">1</span>&nbsp; / 1</p>
              </div>
            </div>
            <div className="px-5 flex items-center">
              <div className=" font-bold text-left text-yellow-300">2000</div>
              <img src="/images/game/coin.svg" className="h-[30px]"></img>
            </div>
        </div>
        <div className="w-full bg-[#021E45] backdrop-blur-xl border-[1px] border-yellow-300 flex justify-between px-4 py-1 rounded-full hover:text-white hover:cursor-pointer hover:bg-opacity-80 my-1">
          <div className="flex">
            <div className=" bg-gray-600 bg-opacity-60 rounded-full m-1 p-1">
              <img
                src="/images/boosts/recharge.svg"
                className="w-[30px] "
              />
            </div>
            <div className="px-5">
              <div className="font-bold text-left">Recharge</div>
              <p className="text-sm text-left justify-end text-gray-300"> <span className="text-yellow-300 font-bold">5</span>&nbsp; / 5</p>
            </div>
          </div>
          <div className="px-5 flex items-center">
            <div className="font-bold text-left text-yellow-300">2000</div>
            <img src="/images/game/coin.svg" className="h-[30px]"></img>
          </div>
        </div>  

      </div>
      <div className="bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px] my-2"></div>
      
      
    </main>
  );
}
export default Boosts