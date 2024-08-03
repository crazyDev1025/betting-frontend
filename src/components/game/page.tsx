'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { useAppContext } from "@/context/useAppContext";
import { formatNumber } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Game = () => {
  const { balance, setBalance, authToken, totalEarned, setTotalEarned, profitPerHour, userLevel, setUserLevel } = useAppContext();
  const [count, setCount] = useState<number>(0);
  const [mount, setMount] = useState<number>(1000);
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number }[]>([]);
  const [ballPosition, setBallPosition] = useState<number>(0);
  let animationId = 0;

  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ballIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleIncrement = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (mount <= 0) return;

    // Move the ball up
    setBallPosition(prev => Math.min(prev + 3, 15));

    if ('touches' in event) {
      const touches = Array.from(event.touches);
      touches.forEach(touch => {
        setAnimations((prev) => [...prev, { id: animationId++, x: touch.clientX, y: touch.clientY }]);
        const newCount = count + (1);
        setCount(newCount);
        setMount(mount - 1);
        setBalance(balance + (1));
        setTotalEarned(totalEarned + (1));
      });
    } else {
      setAnimations((prev) => [...prev, { id: animationId++, x: event.clientX, y: event.clientY }]);
      const newCount = count + (1);
      setCount(newCount);
      setMount(mount - 1);
      setBalance(balance + (1));
      setTotalEarned(totalEarned + (1));
    }

    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }

    // Reset the ball descent interval
    if (ballIntervalRef.current) {
      clearInterval(ballIntervalRef.current);
    }
    ballIntervalRef.current = setInterval(() => {
      setBallPosition(prev => Math.max(prev - 3, 0));
    }, 100);
  };

  useEffect(() => {
    if (mount < (1000 || 0)) {
      const intervalId = setInterval(() => {
        setMount((prevMount) => Math.min(prevMount + 3, (1000 || 0)));
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [mount]);

  useEffect(() => {
    // Clean up the ball descent interval when component unmounts
    return () => {
      if (ballIntervalRef.current) {
        clearInterval(ballIntervalRef.current);
      }
    };
  }, []);


  return (
    <main className="w-full pt-16 z-10">
      
      <div className="m-3 flex justify-stretch gap-3 bg-[#FFB800] p-3 rounded-xl">
        <div className="w-1/2 bg-[#021E45]  flex justify-center rounded-l-full hover:cursor-pointer hover:bg-opacity-80">
          <div className="mx-auto bg-black bg-opacity-60 border-2 border-gray-800 rounded-full m-1 p-1">
            <img
              src="/images/bets/real.svg"
              className="w-[30px] "
            />
          </div>
          <div className="mx-auto flex items-center">
            <div>
            <div className="text-lg text- font-bold text-center">Level</div>
            <p className="text-sm text-right justify-end text-gray-300 flex items-center"> <span className="text-yellow-300 font-bold">1</span>&nbsp; / 8</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#021E45]  flex justify-center rounded-r-full hover:cursor-pointer hover:bg-opacity-80">
          <div className="mx-auto flex items-center">
            <div className="">
            <div className="text-lg text-white font-bold text-center">Power</div>
            <p className="text-sm text-right text-gray-400 flex items-center justify-right"><span className="text-yellow-300 font-bold">1</span> &nbsp;/ 1</p>
            </div>
          </div>
          <div className="mx-auto bg-black bg-opacity-70 border-2 border-gray-800 rounded-full m-1 p-1">
            <img
              src="/images/game/shoes.svg"
              className="w-[30px] "
            />
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src="/images/game/coin.svg">
        </img>
        <div className="flex items-centerm py-5 text-3xl text-orange-400 font-bold">{formatNumber(balance)}</div>
      </div>
      <div className="relative w-full flex justify-center h-[40vh]" onClick={handleIncrement} onTouchStart={handleIncrement}>

        <img src="/images/game/BigLion.svg" className="h-full">
        </img>
        <img 
          src="/images/game/Bigball.svg" 
          className="absolute h-[10vh] transition-all duration-300 ease-in-out" 
          alt="Ball" 
          style={{
            bottom: `${ballPosition}px`,
            left: '33%',
          }}
        />
        <AnimatePresence>
          {animations.map((animation) => (
            <motion.div
              key={animation.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -400 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="select-none font-medium text-[40px] text-white touch-none"
              style={{
                position: "fixed",
                left: `${animation.x}px`,
                top: `${animation.y}px`,
              }}
            >
              + {(1)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="fixed bottom-[110px]  w-full  flex justify-center items-center gap-x-2 px-5">

        <div className="relative">
          <img src="/images/game/reward.svg" className="absolute bottom-14" />
          <div className="flex justify-center">
            <img src="/images/game/flash.svg" className="bottom-0 left-1/4 w-[30px]" /> 
          </div>
          <div className="bottom-0 w-1/4 text-orange-400 font-bold text-[12px]">{mount}/{1000 || 0}</div>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl h-4 w-full rounded-full">
          <div className="bg-yellow-400 h-4 w-[20%] rounded-full" style={{ width: `${(mount / (1000 || 1)) * 100}%` }}></div>
          
        </div>
        
      </div>
    </main>
  );
}
export default Game