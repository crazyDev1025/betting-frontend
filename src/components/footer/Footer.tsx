'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'


const Footer: React.FC = () => {

    interface DataItem {
        image: string;
        title: string;
        active: string;
        link: string;
    }

    const data: DataItem[] = [
        {
            image: '/images/footer/earn.svg',
            title: 'Earn',
            active: "earn",
            link: "/earn"
        },
        {
            image: '/images/footer/boosts.svg',
            title: 'Boosts',
            active: "boosts",
            link: "/boosts"
        },
        {
            image: '/images/footer/game.svg',
            title: 'Game',
            active: "game",
            link: "/game"
        },
        {
            image: '/images/footer/friends.svg',
            title: 'Friends',
            active: "friends",
            link: "/friends"
        },
        {
            image: '/images/footer/bets.svg',
            title: 'Bets',
            active: "bets",
            link: "/bets"
        }
    ]
    const pathname = usePathname()
    

    return (
        <div className='fixed bottom-0 z-[7000] h-[80px] flex gap-2 bg-black bg-opacity-80 backdrop-blur-md rounded-t-[10px] w-[100%] items-center justify-center px-[5%]'>
            {
                data.map((d, i) => {
                    return (
                        <Link key={i} href={d.link} className="flex flex-col p-2 w-full">
                            <div  className='flex flex-col gap-1 items-center relative'>
                                {d.link !== "/game" && (<Image width={30} height={30} src={d.image} alt='' className={`${d.link === pathname ? ' opacity-100' : 'opacity-90'}`}></Image> )}
                                {d.link === "/game" && (
                                    <div  className='relative w-[30px] h-[30px] '>
                                        <div className='absolute w-[80px] h-[80px] -bottom-3 -left-[25px] bg-[#3C74D3] rounded-full mb-2 border-4 border-[#384DA5]'>
                                            <img src={d.image} alt='' className={`${d.link === pathname ? 'opacity-100':'opacity-100'} 'w-full h-full bottom-0 left-0'`}/>
                                        </div>
                                        
                                        
                                    </div> 
                                )}
                                <div className={`${d.link === pathname ? 'text-white border-b-2 border-yellow-300' : 'text-gray-500'}`}>{d.title}</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>

    )
}

export default Footer