import React, { useContext } from 'react';
import { ShakemonContext } from '../context/ShakemonContext';

import Image from 'next/image';

interface StartScreenLogoProps {}

export const StartScreenLogo: React.FC<StartScreenLogoProps> = ({}) => {
    const { pokemon } = useContext(ShakemonContext);

    return (
        <main className='w-full py-4 max-w-3xl ml-auto mr-auto' id="shakemon-start-screen-logo-component">
            <span className='flex gap-2 content-center justify-center flex-row'>
                    <Image src="/pokeball.svg" height={40} width={40} layout="intrinsic" objectFit='contain'></Image>    
                    <h1 className='text-stone-700 text-4xl sm:text-7xl'>Shakémon</h1>
                </span>
        </main>
    )
}