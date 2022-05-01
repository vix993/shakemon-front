import React, { createContext, useState, ReactNode, useEffect, InputHTMLAttributes } from 'react';
import { Pokemon } from '../models/Pokemon';
import { ShakemonContextData } from '../models/ShakemonContextData';
import { getPokemon } from '../repository/getShakemonRepository';

import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

// import { getBlogPosts } from '../repositories/blogPostsRepository';

// import { BlogPost } from '../models/BlogPost';
// import { BlogPostsContextData } from '../models/BlogPostsContextData';

export interface ShakemonProviderProps {
    children: ReactNode;
}

export const ShakemonContext = createContext({} as ShakemonContextData)

export const ShakemonProvider = ({ children }: ShakemonProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [searchInput, setSearchInput] = useState("");

    // fetching blog posts data
    const requestPokemon = (searchInput: string) => {
        setIsLoading(true);

        getPokemon(searchInput)
            .then((res) => {
                if (res.data) {
                    setPokemon(res.data);
                    console.log(pokemon)
                }
                setIsLoading(false)
            })
            .catch((err: any) => {
                console.log(err);
                setIsLoading(false);
                
                toast.error(err.response.data.message);
            });
    }

    const handleChangeSearchInput = (newSearchInput: string) => {
        setSearchInput(newSearchInput);
    }

    useEffect(() => {

    }, [pokemon])

    return (
        <ShakemonContext.Provider
            value={{isLoading, requestPokemon, pokemon, searchInput, handleChangeSearchInput}}
        >
            {children}
        </ShakemonContext.Provider>
    );
}