// Nav.tsx
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { RiArrowLeftLine, RiErrorWarningLine } from 'react-icons/ri';


interface NavProps {
    handleClick: () => void;
    showNav: boolean;
}

const Nav: React.FC = () => {
    return (
        <div className={`fixed flex top-[20px] py-2 items-center justify-between w-full text-white px-[4%] bg-black bg-opacity-60 backdrop-blur-xl z-20`}>
            <Link href={"/"}><RiArrowLeftLine className='hover:cursor-pointer hover:text-white text-2xl text-yellow-300'/></Link>
            <div className='flex flex-col items-center '>
                {/* <Image width={25} height={25} src={"/logo 1.png"} alt='' /> */}
                <p className='text-[15px] text-[#FEFEFE]'>ETO&apos;O Fils</p>
                {/* <p className='text-[14px] font-bold text-gray-500'>Football</p> */}
            </div>
            <RiErrorWarningLine className='hover:cursor-pointer hover:text-white text-2xl text-yellow-300'/>
            
        </div>
    );
}

export default Nav;
