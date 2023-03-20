import * as yup from 'yup'
import { ObjectSchema } from 'yup'

export interface ITestSchema {
    name: string,
    age: number,
    born?: string,
    height: number
}

export const pokemonSchema: ObjectSchema<ITestSchema> = yup.object({
    name: yup.string().required('Nome é obrigatório porque eu preciso testar o errro com uma frase muito longa. Vai que algum maluco né, queira colocar um texto como já vimos várias vezes...').defined(),
    age: yup.number().defined(),
    born: yup.string(),
    height: yup.number().defined()
})