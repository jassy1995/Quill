import { useState } from 'react'
import NotificationBadge from "./Notification"
import Logo from './Logo'
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineMenu } from 'react-icons/ai';
import ProfileDropdown from './ProfileDropdown';
import MenuNav from '../modals/MenuNav';

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const show = `xxs:flex xs:flex ss:flex sm:flex md:flex lg:flex xl:flex`
    const hide = `xxs:hidden xs:hidden ss:hidden sm:hidden md:hidden lg:hidden xl:hidden`

    const WriteButon = ({ size }) => {
        const toggle = size === 'mobile' ? `flex ${hide}` : `hidden ${show}`;
        return (
            <button className={`justify-center space-x-2 items-center px-2 py-1 border border-slate-900 rounded-md ${toggle}`}>
                <BsPencilSquare className='text-slate-900 font-bold' />
                <span className='text-slate-900 font-bold'>write</span>
            </button>
        )
    }

    return (
        <>
            <nav className='w-full border-b border-slate-200'>
                <div className='mx-4 lg:mx-32 xl:mx-32 flex justify-between items-center py-4'>
                    <NotificationBadge count={12} />
                    <Logo />
                    <WriteButon size='mobile' />
                    <div className='flex justify-center items-center space-x-3'>
                        <AiOutlineMenu className={`flex text-slate-900 font-semibold w-6 h-6 ${hide}`} onClick={() => setOpen(true)} />
                        <ProfileDropdown show={show} />
                        <button className={`hidden justify-center space-x-2 items-center px-2 py-[1px] border border-slate-900 rounded-md ${show}`}>
                            <BsPencilSquare className='text-slate-900 font-bold' />
                            <span className='text-slate-900 font-bold'>write</span>
                        </button>
                    </div>
                </div>
            </nav>
            <MenuNav open={open} setClose={() => setOpen(false)} />
        </>
    )
}

