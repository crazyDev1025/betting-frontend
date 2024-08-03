import Image from "next/image";
import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
const Bets = () => {
  return (
    <main className=" w-full pt-20 z-10 min-h-[900px]">
      
      <div className=" m-3 pt-4 px-10 border-[1px] rounded-lg border-green-400 bg-[url('/images/bets/back1.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between">
          <div className="m-2 bg-gray-950 bg-opacity-70 p-2 border-[1px]  border-green-400 rounded-full">
            <img
              src="/images/bets/FCB.svg"
              className="w-[40px]"
            />
          </div>
          <div>
            <div className=" text-center text-xl">Live</div>
            <div className="text-3xl font-bold text-orange-400">4 : 0</div>
          </div>
          <div className="m-2 bg-gray-950 bg-opacity-70 p-2 border-[1px] border-green-400 border- rounded-full">
            <img
              src="/images/bets/real.svg"
              className="w-[40px]"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex border-[1px] border-yellow-300 px-2 rounded-full items-center"><CiClock1 className="text-xl text-yellow-300"/>10:00</div>
          
        </div>
        <div className="flex justify-center">
          <img
            src="/images/bets/playground.svg"
            className=""
          />
        </div>
        
      </div>
      <div className=" m-3 py-2 px-4 border-[1px] rounded-lg border-blue-400 bg-[url('/images/bets/back2.svg')]  bg-no-repeat bg-cover bg-center">
        <div className="text-xl">Match Score</div>
        <div className="flex justify-between gap-x-3 pt-2">
          <div className="w-1/3 bg-blue-700 bg-opacity-80 flex justify-between py-1 rounded-l-2xl px-3">
            <img
              src="/images/bets/lion1.svg"
              className="h-[40px]"
            />
            <div className="">
              <div className="text-center">1x</div>
              <div className="text-yellow-300 text-center">2.02</div>
            </div>
          </div>
          <div className="w-1/3 bg-blue-700 bg-opacity-80 flex justify-between py-1 px-4">
            <img
              src="/images/bets/lion2.svg"
              className="w-[40px] h-[40px]"
            />
            <div className="">
              <div className="text-center">Draw</div>
              <div className="text-yellow-300 text-center">3.02</div>
            </div>
          </div>
          <div className="w-1/3 bg-blue-700 bg-opacity-80 flex flex-row-reverse justify-between py-1 rounded-r-2xl px-3">
            <img
              src="/images/bets/lion3.svg"
              className="h-[40px]"
            />
            <div className="">
              <div className="text-center">2x</div>
              <div className="text-yellow-300 text-center">3.62</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex justify-stretch gap-3">
        <div className="grow bg-yellow-400 bg-opacity-90 backdrop-blur-xl border-[1px] border-yellow-300 flex justify-center rounded-l-full hover:cursor-pointer hover:text-white hover:bg-yellow-600">
          <div className="mx-auto bg-black bg-opacity-70 border-2 border-gray-800 rounded-full m-1 p-1">
            <img
              src="/images/bets/FCB.svg"
              className="h-[30px] "
            />
          </div>
          <div className="mx-auto flex items-center">
            <div>
            <div className="text-lg text-gray-900 font-bold text-center">Bet</div>
            <p className="text-sm text-center text-black flex items-center"> <FaDatabase />&nbsp; 65</p>
            </div>
          </div>
        </div>
        <div className="grow bg-gray-800 backdrop-blur-xl bg-opacity-70 border-[1px] border-yellow-300 flex justify-center rounded-r-full hover:text-white hover:cursor-pointer hover:bg-yellow-600">
          <div className="mx-auto flex items-center">
            <div>
            <div className="text-lg text-yellow-300 font-bold text-center">Bet</div>
            <p className="text-sm text-center text-white flex items-center"><FaDatabase />&nbsp; 65</p>
            </div>
          </div>
          <div className="mx-auto bg-black bg-opacity-70 border-2 border-gray-800 rounded-full m-1 p-1">
            <img
              src="/images/bets/real.svg"
              className="h-[30px] "
            />
          </div>

        </div>
      </div>
      <div className=" m-3 py-2 px-4 border-[1px] rounded-lg border-yellow-300 bg-[url('/images/bets/back3.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between font-bold py-1 items-center">
          <div className="relative text-xl"><span className=" text-yellow-300">Balance: </span><span className="text-gray-800"> $1235.00</span></div>
          <div className="px-4 py-1 bg-yellow-300 text-gray-900 rounded-full border-[1px] border-yellow-300 hover:cursor-pointer hover:bg-yellow-600 w-[120px] text-center">Top up</div>
        </div>
        <div className="flex justify-between font-bold py-1 items-center">
          <div className="relative text-green-300 text-xl font-bold"><span className=" text-green-400">Betted Amount: </span><span className="text-gray-800">$200</span></div>
          <div className="px-4 py-1 bg-green-500 text-gray-900 rounded-full border-[1px] border-green-500 hover:cursor-pointer hover:bg-yellow-600 w-[120px] text-center">Withdraw</div>
        </div>
        <div className="bg-gradient-to-r from-[#00000000] via-yellow-300 to-[#00000000] h-[1px] my-2"></div>

        <div className="flex justify-between font-bold py-1 items-center">
          <div className="relative  text-xl font-bold"><span className=" text-blue-500">Betting Amount: </span><span className="text-gray-800">$200</span></div>
          {/* <div className="px-4 py-1 bg-blue-500 text-gray-900 rounded-full border-[1px] border-blue-500 hover:cursor-pointer hover:bg-yellow-600 w-[120px] text-center">Max</div> */}
        </div>
        <div className="flex justify-between gap-x-2 pt-2">
          <div className="bg-blue-800 bg-opacity-80 grow text-center py-1 border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">$1</div>
          <div className="bg-blue-800 bg-opacity-80 grow py-1 text-center border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">$5</div>
          <div className="bg-blue-800 bg-opacity-80 grow text-center py-1 border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">$10</div>
          <div className="bg-blue-800 bg-opacity-80 grow text-center py-1 border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">$25</div>
          <div className="bg-blue-800 bg-opacity-80 grow text-center py-1 border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">$50</div>
          <div className="bg-blue-800 bg-opacity-80 grow text-center py-1 border border-yellow-300 rounded-full hover:cursor-pointer hover:bg-opacity-100">Max</div>

        </div>
      </div>
      <div className="flex justify-between m-3 py-2 gap-x-3">
        <div className="w-1/2 border-[1px] border-yellow-400 text-yellow-400 text-center text-lg py-2 font-bold bg-gray-600 bg-opacity-50 backdrop-blur-xl  rounded-full hover:cursor-pointer hover:text-white hover:bg-yellow-600">Connect Wallet</div>
        <div className="w-1/2 border-[1px] bg-yellow-400 text-center border-yellow-400 text-lg py-2 text-gray-800 font-bold backdrop-blur-xl  rounded-full hover:cursor-pointer hover:text-white hover:bg-yellow-600">Place Bet</div>
      </div>
    </main>
  );
}
export default Bets