import React from 'react';
import { PokemonDisplay } from './PokemonDisplay';
import { PokemonSearchFilter } from './PokemonSearchInput';

interface MainDisplayProps {}

export const MainDisplay: React.FC<MainDisplayProps> = ({}) => {

    return (
        <main className='w-full pt-6 py-4 max-w-4xl ml-auto mr-auto' id="shakemon-main-display-component">
            {/* <h4 className='flex justify-center items-center font-normal text-center text-sm sm:text-lg'>Search your favourite pokemon!</h4> */}
            <h4 className='flex justify-center items-center font-normal text-center text-sm sm:text-base'>How would Shakespeare describe it?</h4>
            <PokemonSearchFilter />
            <PokemonDisplay />
        </main>
    )
}