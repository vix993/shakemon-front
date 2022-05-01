import React, { useContext } from 'react';
import Image from 'next/image';
import { ShakemonContext } from '../context/ShakemonContext';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const { pokemon } = useContext(ShakemonContext);
    return (
        <header className="w-full bg-stone-700 h-16 sm:h-24 border-b-2 border-stone-400 flex justify-center" id="shakemon-header">
            <main className='flex max-w-3xl w-full h-full text-xl px-8 items-center'>
        
                {pokemon && (
                    <span className='max-h-12 flex gap-2 content-center justify-center flex-row'>
                        <Image src="/pokeball.svg" height={30} width={30} layout="intrinsic" objectFit='contain'></Image>    
                        <h1 className='text-stone-100 '>Shakémon</h1>
                    </span>
                )}
            </main>
        </header>
    )
}