import yup, { ObjectSchema } from 'yup'

interface ITestSchema {
    name: string,
    age: number,
    born?: string,
    height: number
}

export const pokemonSchema: ObjectSchema<ITestSchema> = yup.object({
    name: yup.string().required('Nome é obrigatório').defined(),
    age: yup.number().defined(),
    born: yup.string(),
    height: yup.number().defined()
})