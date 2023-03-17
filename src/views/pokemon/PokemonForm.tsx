import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ITestSchema, pokemonSchema } from '../../services/schemas/pokemonSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomSelect from '../../components/select/CustomSelect'
import CustomButton from '../../components/buttons/CustomButton'
import { CustomInput } from '../../components/inputs/CustomInput'
import CustomForm from '../../components/form/CustomForm'

export default function PokemonForm(): React.ReactElement {

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<ITestSchema>({
        resolver: yupResolver(pokemonSchema), defaultValues: {
            age: 0,
            born: '',
            height: 0,
            name: ''
        }
    })

    console.log(errors)

    function submit(values: ITestSchema) {
        console.log(values)
    }

    return (
        <CustomForm
            callBackSubmit={submit}
            defaultValues={{ age: 0, born: '', height: 0, name: '' }}
            fields={[
                {
                    defaultValue: '',
                    label: 'Nome',
                    name: 'nome',
                    type: 'text',
                    placeholder: 'nome'
                }
            ]}
            schema={pokemonSchema}
        />
    )
}