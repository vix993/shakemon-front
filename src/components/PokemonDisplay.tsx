import React from 'react';

import { capitalize } from '../utils/capitalize';
import { Pokemon } from '../models/Pokemon';

interface PokemonDisplayProps {
    pokemon: Pokemon;
}

export const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ pokemon }) => {
    return (
        <main className='w-full pt-2 px-8 py-4 max-w-4xl' id="shakemon-pokemon-display-component">
            <div className='bg-red-400 rounded-2xl w-full h-full flex flex-col gap-3 p-4'>
                <section className=' h-40 w-auto rounded-full bg-stone-50 flex flex-col sm:flex-row justify-center items-center py-2 px-6'>
                    <h1 className='text-stone-700 text-2xl sm:text-7xl'>
                        {capitalize(pokemon.name)}
                    </h1>
                    <img
                    className='h-full sm:ml-auto'
                        src={ pokemon.spriteUrl }
                        alt={`${pokemon.name} Sprite`}
                    ></img>
                </section>
                <section className='sm:px-4'>
                    <h4 className='text-stone-50 sm:text-2xl text-center'>
                        { pokemon.description }
                    </h4>
                </section>
            </div>
        </main>
    )
}