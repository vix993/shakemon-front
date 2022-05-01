import React, { useContext, useState } from 'react';
import { ShakemonContext } from '../context/ShakemonContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PokemonSearchFilterProps {}

export const PokemonSearchFilter: React.FC<PokemonSearchFilterProps> = ({}) => {
    // const [pokemonName, setPokemonName] = useState("");
    const { isLoading, requestPokemon, searchInput, handleChangeSearchInput, pokemon } = useContext(ShakemonContext);

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            requestPokemon(searchInput);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        requestPokemon(searchInput);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        handleChangeSearchInput(e.target.value);
    }
    return (
        <main className='w-full px-8 py-4' id="shakemon-search-filter-component">
            <ToastContainer />
            <form>
                <div className="relative text-stone-200 focus-within:text-stone-800">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                        onSubmit={(e) => {handleSubmit(e)}}
                        onClick={(e) => {handleSubmit(e)}}
                    >
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input
                    onChange={(e) => {handleInputChange(e)}}
                    disabled={isLoading}
                    onKeyDown={(e) => {handleEnter(e)}}
                    type="search"
                    name="q"
                    className="w-full py-2 text-sm bg-stone-300 rounded-md pl-10 focus:outline-none focus:shadow text-stone-800"
                    placeholder="Search pokemon name..."
                    autoComplete='off'
                    id="shakemon-search-filter"
                />
                </div>
            </form>

        </main>
    )
}