import { Pokemon } from "./Pokemon"

export interface ShakemonContextData {
    isLoading: boolean
    requestPokemon: (name: string) => void
    pokemon: Pokemon
    searchInput: string
    handleChangeSearchInput: (newSearchInput: string) => void
}