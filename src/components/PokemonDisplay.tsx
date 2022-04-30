import React from 'react';

import Image from 'next/image'

import { dummyShakemon } from '../../data/dummyData';
import { capitalize } from '../utils/capitalize';

interface PokemonDisplayProps {}

export const PokemonDisplay: React.FC<PokemonDisplayProps> = ({}) => {

    return (
        <main className='w-full pt-2 px-8 py-4 max-w-4xl' id="shakemon-pokemon-display-component">
            <div className='bg-red-400 rounded-2xl w-full h-full flex flex-col gap-3 p-4'>

                {/* <section>
                    <h1 className='text-stone-700 text-2xl'>{capitalize(dummyShakemon.name)}</h1>
                </section> */}
                <section className=' h-40 w-auto rounded-full bg-stone-50 flex flex-col sm:flex-row justify-center items-center py-2 px-6'>
                    <h1 className='text-stone-700 text-3xl sm:text-7xl xsm:hidden'>{capitalize(dummyShakemon.name)}</h1>
                    <img
                    className='h-full sm:ml-auto'
                        src={dummyShakemon.spriteUrl}
                        alt={capitalize(dummyShakemon.name) + " Sprite"}
                    ></img>
                </section>
                <section className='px-2 sm:px-4'>
                    <h4 className='text-stone-50 sm:text-2xl text-center'>{dummyShakemon.description}</h4>
                </section>
            </div>
            {/* {dummyShakemon} */}
        </main>
    )
}