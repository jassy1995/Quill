import React from 'react';

export default function Logo() {
    return (
        <div className="hidden items-end bg-red-40 space-x-1  justify-center px-2 py-1 md:flex lg:flex xl:flex">
            <img className="w-6 h-6" src="/quill.png" alt="not exist" />
            <h3 className="text-slate-900 text-xl pb-0  italic font-bolder">Quill</h3>
        </div>
    )
}
