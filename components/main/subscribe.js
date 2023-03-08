import React from 'react'
import styles from './subscribe.module.scss'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from 'next/link';
export const Subscribe = () => {
  return (
    <div>
        <div className={`card w-2/6 h-1/2 bg-black rounded-lg align-middle mx-auto border-spacing-1 shadow-xl m-5 relative bg-cover
         ${styles.glowingbtn}
         `}>
            <img
             className='rounded-lg shadow-2xl '
             src="../../lokalizeEm.svg" alt="lokalize image" />
             <Link href="https://github.com/sahrilputra/newIfest-uaj">
             <button className=' text-center m-auto bottom-10 mx-0 text-center font-ligt text-xs text-gray-100 bg-black w-1/2 h-1/6 rounded-lg
             hover:bg-white hover:text-black animate-bounce
             '>
                See our repoo
                <BsFillArrowUpRightCircleFill className=' text-white mx-auto hover:text-black' />
                </button>
                </Link>
        </div>
    </div>
  )
}
