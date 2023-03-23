import { IApiResponse, IBasicNestListResult, IListResponseContent, IObjectLiteral, ISearchParams } from '../../interfaces/defIntefaces'
import api from '../../api'
import { IPokemon } from '../../interfaces/pokemonInterfaces'
import { TPokemonListData } from '../../../views/pokemon/PokemonList'
import { AxiosError, AxiosResponse } from 'axios'
import { IPokeSchema } from '../../schemas/pokemonSchemas'

export async function listPokemons(params: ISearchParams): Promise<IApiResponse<IListResponseContent<TPokemonListData>>> {
    const queryParams = new URLSearchParams({
        offset: params.offset.toString()
    })
    if (params.limit) queryParams.append('limit', params.limit.toString())
    const result: IApiResponse<IListResponseContent<TPokemonListData>> = { error: '', message: '' }
    await api.get<IListResponseContent<TPokemonListData>>(`/pokemon?${queryParams.toString()}`)
        .then(res => {
            if (res.data.message) {
                result.message = res.data.message
                delete res.data.message
            }
            if (res.data) result.data = res.data
        }, (err: AxiosError<IObjectLiteral>) => {
            if (err.response?.data?.message) {
                result.error = String(err.response.data.message)
            }
        })
    return result
}

export async function deletePokemon(internal_id: number | string): Promise<IApiResponse<IObjectLiteral>> {
    const result: IApiResponse<IObjectLiteral> = { data: undefined, error: '', message: '' }
    return new Promise((resolve) => {
        api.delete<AxiosError<{ message?: string, error?: string }>, AxiosResponse<{ data?: any, message?: string }>>(`/pokemon/${internal_id}`).then(res => {
            result.status = res.status
            result.message = res.data.message ?? 'Pokémon deletado com sucesso!'
            if (res.data.data) result.data = res.data.data

            resolve(result)
        }, err => {
            result.status = err.response?.status
            result.error = err.response?.data.message ?? err.response?.data.error ?? err.message

            resolve(result)
        })

    })
}

export async function getPokemon(internal_id: number | string): Promise<IApiResponse<IPokeSchema>> {
    const result: IApiResponse<IPokeSchema> = { data: undefined, error: '', message: '' }
    return new Promise((resolve) => {
        api.get<AxiosError<{ message?: string, error?: string }>, AxiosResponse<IPokeSchema>>(`/pokemon/${internal_id}`).then(res => {
            result.status = res.status
            if (res.data) result.data = res.data

            resolve(result)
        }, err => {
            result.status = err.response?.status
            result.error = err.response?.data.message ?? err.response?.data.error ?? err.message

            resolve(result)
        })

    })
}

// export async function listPokemonsApi(params: ISearchParams): Promise<IApiResponse<IListResponseContent<IPokemon>>> {
//     let searchParams: IQueryParamsObject = {}

//     if (params.limit) searchParams['limit'] = params.limit.toString()
//     if (params.offset) searchParams['offset'] = params.offset.toString()

//     const result: IApiResponse<IListResponseContent<IPokemon>> = {}
//     let pokelist: IListResponseContent<IBasicListResult> | undefined
//     api.get<IListResponseContent<IBasicListResult>>(`/pokemon?${new URLSearchParams(searchParams).toString()}`).then(res => {
//         pokelist = res.data
//         result.status = res.status
//     }, error => {
//         result.message = 'Falha ao buscar listagem de Pokémons.'
//     })

//     if (pokelist && Array.isArray(pokelist.result)) {
//         const list: Array<IPokemon> = []
//         for await (const listItem of pokelist.result) {
//             list.push(await getPokemonInfoByUrl(listItem.url))
//         }
//         result.data = {
//             next: pokelist.next,
//             count: pokelist.count,
//             previous: pokelist.previous,
//             result: list
//         }
//     }

//     return result
// }


// async function getPokemonInfoByUrl(url: string): Promise<IPokemon> {
//     return new Promise((resolve, reject) => {
//         api.get<IPokemon>(url, { baseURL: '' }).then(res => {
//             resolve(res.data)
//         }, err => {
//             reject(err)
//         })
//     })
// }