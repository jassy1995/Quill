import React from 'react'
import NotificationBadge from "./Notification"
import Logo from './Logo'
import { BsPencilSquare } from "react-icons/bs"

export default function Navbar() {
    return (
        <nav className='w-full border-b border-slate-200'>
            <div className='mx-32 flex justify-between items-center py-4'>
                <NotificationBadge count={12} />
                <Logo />
                <div className='flex justify-center items-center space-x-3'>
                    <img className="w-9 h-9 object-cover rounded-full" src="/user.jpeg" alt="not exist" />
                    <button className='flex justify-center space-x-2 items-center px-2 py-1 border border-slate-900 rounded-md'>
                        <BsPencilSquare className='text-slate-900 font-bold' />
                        <span className='text-slate-900 font-bold'>write</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}


