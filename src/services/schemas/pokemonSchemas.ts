import * as yup from 'yup'
import { ObjectSchema } from 'yup'
import { IPokemon } from '../interfaces/pokemonInterfaces'

export interface ISpritesSchema {
    back_default?: File | null
    back_female?: File | null
    back_shiny?: File | null
    back_shiny_female?: File | null
    front_default?: File | null
    front_shiny?: File | null
    front_shiny_female?: File | null
}
// export interface IPokemon {
//     name: string
//     id?: number
//     internal_id?: number
//     order?: number
//     weight?: number
//     height?: number
//     base_experience?: number
//     is_default: boolean
//     location_area_encounters?: string
//     sprites: ISpritesSchema
// }

export const pokemonSchema: ObjectSchema<IPokemon> = yup.object({
    name: yup.string().required('Nome do pokémon é obrigatório').defined(),
    id: yup.number().notRequired().nonNullable().default(undefined).transform(value => Number.isNaN(value) ? undefined : value),
    internal_id: yup.number().notRequired().nonNullable().default(undefined),
    order: yup.number().notRequired().nonNullable().default(undefined).transform((value) => Number.isNaN(value) ? undefined : value),
    weight: yup.number().notRequired().nonNullable().default(undefined).transform((value) => Number.isNaN(value) ? undefined : value),
    height: yup.number().notRequired().nonNullable().default(undefined).transform((value) => Number.isNaN(value) ? undefined : value),
    base_experience: yup.number().notRequired().nonNullable().default(undefined).transform((value) => Number.isNaN(value) ? undefined : value),
    is_default: yup.boolean().notRequired().default(false).nonNullable().transform(value => Boolean(value)),
    location_area_encounters: yup.string().notRequired().nonNullable().default(undefined),
    sprites: yup.object().shape({
        back_default: yup.string().notRequired().nullable().default(null),
        front_default: yup.string().notRequired().nullable().default(null),
        back_shiny: yup.string().notRequired().nullable().default(null),
        front_shiny: yup.string().notRequired().nullable().default(null),
        front_shiny_female: yup.string().notRequired().nullable().default(null),
        back_female: yup.string().notRequired().nullable().default(null),
        back_shiny_female: yup.string().notRequired().nullable().default(null),
    })
})


export const spritesSchema: ObjectSchema<ISpritesSchema> = yup.object().shape({
    back_default: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    back_female: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    back_shiny: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    back_shiny_female: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    front_default: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    front_shiny: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null),
    front_shiny_female: yup.mixed<File>().notRequired().nullable().test('testFile', 'Arquivo não pode ser aceito.', (value, context) => {
        // console.log(value)
        // console.log(context)
        return true
    }).default(null)
})