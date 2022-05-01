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

    // fetching pokemon data
    const requestPokemon = (searchInput: string) => {
        setIsLoading(true);

        getPokemon(searchInput)
            .then((res) => {
                if (res.data) {
                    setPokemon(res.data);
                }
                setIsLoading(false)
            })
            .catch((err: any) => {
                setIsLoading(false);
                if (err.response && err.response.data) {
                    toast.error(err.response.data.message);
                } else {
                    toast.error(err.message)
                }
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