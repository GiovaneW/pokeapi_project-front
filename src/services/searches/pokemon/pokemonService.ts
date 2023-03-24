import { IApiResponse, IBasicNestListResult, IListResponseContent, IObjectLiteral, ISearchParams } from '../../interfaces/defIntefaces'
import api from '../../api'
import { IPokemon, ISprites } from '../../interfaces/pokemonInterfaces'
import { TPokemonListData } from '../../../views/pokemon/PokemonList'
import { AxiosError, AxiosResponse } from 'axios'
import { ISpritesSchema } from '../../schemas/pokemonSchemas'

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
            if (err?.response?.data?.message) {
                result.error = String(err?.response?.data?.message)
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
            result.error = err?.response?.data?.message ?? err?.response?.data?.error ?? err.message

            resolve(result)
        })

    })
}

export async function getPokemon(internal_id: number | string): Promise<IApiResponse<IPokemon>> {
    const result: IApiResponse<IPokemon> = { data: undefined, error: '', message: '' }
    return new Promise((resolve) => {
        api.get<AxiosError<{ message?: string, error?: string }>, AxiosResponse<IPokemon>>(`/pokemon/${internal_id}`).then(res => {
            result.status = res.status
            if (res.data) result.data = res.data

            resolve(result)
        }, err => {
            result.status = err.response?.status
            result.error = err?.response?.data?.message ?? err?.response?.data?.error ?? err.message

            resolve(result)
        })

    })
}

export async function createPokemon(data: IPokemon): Promise<IApiResponse<IPokemon>> {
    const result: IApiResponse<IPokemon> = { message: '' }
    return new Promise((resolve) => {
        api.post<AxiosError<{ message?: string, error?: string }>, AxiosResponse<{ data?: IPokemon, message?: string }>>('/pokemon', data).then(res => {
            result.status = res.status
            result.message = res.data.message || 'Pokémon criado com sucesso!'
            if (res.data.data) result.data = res.data.data
            resolve(result)
        }, err => {
            result.status = err.status
            result.error = err?.response?.data?.message ?? err?.response?.data?.error ?? err.message
            resolve(result)
        })
    })
}

export async function updatePokemon(data: IPokemon, pokemonId: number): Promise<IApiResponse<IPokemon>> {
    const result: IApiResponse<IPokemon> = { message: '' }
    return new Promise((resolve) => {
        api.patch<AxiosError<{ message?: string, error?: string }>, AxiosResponse<{ data?: IPokemon, message?: string }>>(`/pokemon/${pokemonId}`, data).then(res => {
            result.status = res.status
            result.message = res.data.message || 'Pokémon atualizado com sucesso!'
            if (res.data.data) result.data = res.data.data
            resolve(result)
        }, err => {
            result.status = err.status
            result.error = err?.response?.data?.message ?? err?.response?.data?.error ?? err.message
            resolve(result)
        })
    })
}

export async function updateOnlySprites(data: ISpritesSchema, pokemonId: number): Promise<IApiResponse<ISprites>> {
    const result: IApiResponse<ISprites> = { message: '' }
    console.log(data)
    return new Promise((resolve) => {
        api.put<AxiosError<{ message?: string, error?: string }>, AxiosResponse<{ data?: ISprites, message?: string }>>(`/pokemon/${pokemonId}/sprites`, data, { headers: {
            'Content-Type': 'multipart/form-data'
        } }).then(res => {
            result.status = res.status
            result.message = res.data.message || 'Sprites atualizadas com sucesso!'
            if (res.data.data) result.data = res.data.data
            resolve(result)
        }, err => {
            result.status = err.status
            result.error = err?.response?.data?.message ?? err?.response?.data?.error ?? err.message
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