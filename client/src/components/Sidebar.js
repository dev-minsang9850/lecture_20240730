import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoChatbubbleEllipses} from 'react-icons/io5'
import {FaUserPlus} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import {FiArrowUpLeft} from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='w-full h-full grid grid-cols-[40px,1fr] bg-white'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
            <div>
                <NavLink className={({isActive})=> `w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`}>
                    <IoChatbubbleEllipses size={20}/>
                </NavLink>
                <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                    <FaUserPlus size={20}/>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <button className='mx-auto'>
                    이
                </button>
                <button className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                    <span className='ml-2'>
                        <BiLogOut size={20}/>
                    </span>
                </button>
            </div>
        </div>
        <div className='w-full'>
            <div className='h-16 flex items-center'>
                <h2 className='text-xl font-bold p-4 text-slate-800'>Message</h2>
            </div>
            <div className='bg-slate-200 p-[0.5px]'></div>
            <div className='h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar'>
                <div className='mt-12'>
                    <div className='flex justify-center items-center my-4 text-slate-200'>
                        <FiArrowUpLeft size={50}/>
                    </div>
                    <p className='text-lg text-center text-slate-400'>대화를 시작할 사용자를 탐색하세요.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar