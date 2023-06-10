import React from 'react';
import Modal from './Modal';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'

export default function MenuNav({ open, setClose }) {
    return (
        <div>
            <Modal open={open} setClose={setClose}>
                <div className='flex flex-col space-y-3'>
                    <div className='border-b py-2'>
                        <div className='flex space-x-2 items-center'>
                            <img className='w-9 h-9 object-cover rounded-full' src="/user.jpeg" alt="not exist" />
                            <h1>John Doe</h1>
                        </div>
                    </div>
                    <div className='border-b py-2'>
                        <div className='flex space-x-2 items-center'>
                            <AiOutlineLogout className='w-7 h-7' />
                            <h1>Logout</h1>
                        </div>
                    </div>
                    <div className='border-b py-2'>
                        <div className='flex space-x-2 items-center'>
                            < AiOutlineSetting className='w-7 h-7' />
                            <h1>Setting</h1>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
