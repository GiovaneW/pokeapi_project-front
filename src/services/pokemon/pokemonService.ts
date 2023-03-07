import { IApiResponse, IBasicListResult, IListResponseContent, IQueryParamsObject, ISearchParams } from "../../interfaces/defIntefaces"
import { IPokemon } from "../../interfaces/pokemonInterfaces"
import api from "../api"
import { AxiosError } from 'axios'

export async function listPokemons(params: ISearchParams): Promise<IApiResponse<IListResponseContent<IPokemon>>> {
    let searchParams: IQueryParamsObject = {}

    if (params.limit) searchParams['limit'] = params.limit.toString()
    if (params.offset) searchParams['offset'] = params.offset.toString()

    const result: IApiResponse<IListResponseContent<IPokemon>> = {}
    let pokelist: IListResponseContent<IBasicListResult> | undefined 
    api.get<IListResponseContent<IBasicListResult>>(`/pokemon?${new URLSearchParams(searchParams).toString()}`).then(res => {
        pokelist = res.data
        result.status = res.status
    }, error => {
        console.log(error)
        result.message = 'Falha ao buscar listagem de Pokémons.'
    })
    
    if (pokelist && Array.isArray(pokelist.result)) {
        const list: Array<IPokemon> = []
        for await (const listItem of pokelist.result) {
            list.push(await getPokemonInfoByUrl(listItem.url))
        }
        result.data = {
            next: pokelist.next,
            count: pokelist.count,
            previous: pokelist.previous,
            result: list
        }
    }

    return result
}


async function getPokemonInfoByUrl(url: string): Promise<IPokemon> {
    return new Promise((resolve, reject) => {
        api.get<IPokemon>(url, { baseURL: '' }).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
    })
}