import React from 'react';
import Image from 'next/image';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className="w-full bg-stone-700 h-16 sm:h-24 border-b-2 border-stone-400" id="shakemon-header">
            <main className='flex max-w-7xl w-full h-full text-xl px-6 items-center'>
                {/* <img className='rounded-full h-4/6' src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg" alt="Header Image" /> */}
        
                <span className='max-h-12 flex gap-2 content-center justify-center flex-row'>
                    <Image src="/pokeball.svg" height={30} width={30} layout="intrinsic" objectFit='contain'></Image>    
                    <h1 className='text-stone-100 '>Shakémon</h1>
                </span>
            </main>
        </header>
    )
}