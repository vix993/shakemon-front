import axios, { AxiosError, AxiosResponse } from "axios";
import { Pokemon } from "../models/Pokemon";
import { api } from "./api";

export const getPokemon = async (name: string) => {
    return axios.get(`${api.url}/pokemon/${name}`)
        .then(async (res: AxiosResponse<Pokemon, AxiosError<AxiosResponse<{message: string}>>>) => {
            return res
        })
}