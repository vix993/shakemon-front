import React, { useContext } from 'react';
import { ShakemonContext } from '../context/ShakemonContext';
import { PokemonDisplay } from './PokemonDisplay';
import { PokemonSearchFilter } from './PokemonSearchFilter';
import { StartScreenLogo } from './StartScreenLogo';

interface MainDisplayProps {}

export const MainDisplay: React.FC<MainDisplayProps> = ({}) => {
    const { pokemon } = useContext(ShakemonContext);

    return (
        <main className='w-full pt-6 py-4 max-w-3xl ml-auto mr-auto' id="shakemon-main-display-component">
            {!pokemon && (
                <>
                    <StartScreenLogo></StartScreenLogo>
                    <PokemonSearchFilter></PokemonSearchFilter>
                    <div className='w-full flex justify-center px-6 py2'>
                        <h4 className='flex justify-center items-center font-normal text-center max-w-xs xsm:max-w-none text-sm xsm:text-xl sm:text-3xl mt-4'>How would Shakespeare describe your favourite pokémon?</h4>
                    </div>
                </>
            )}
            {pokemon && (
                <>
                    <h4 className='flex justify-center items-center font-normal text-center text-sm sm:text-base'>How would Shakespeare describe it?</h4>
                    <PokemonSearchFilter />
                    <PokemonDisplay pokemon={pokemon} />
                </>
            )}
        </main>
    )
}