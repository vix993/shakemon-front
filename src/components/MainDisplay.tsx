import React from 'react';
import { PokemonDisplay } from './PokemonDisplay';
import { PokemonSearchFilter } from './PokemonSearchInput';

interface MainDisplayProps {}

export const MainDisplay: React.FC<MainDisplayProps> = ({}) => {

    return (
        <main className='w-full pt-6 py-4 max-w-4xl lg:ml-auto lg:mr-auto' id="shakemon-main-display-component">
            <PokemonSearchFilter />
            <PokemonDisplay />
        </main>
    )
}