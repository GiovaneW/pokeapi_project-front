import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, DeepPartial, useForm } from 'react-hook-form'
import { ObjectSchema } from 'yup'
import { CustomInput } from '../inputs/CustomInput'
import CustomSelect from '../select/CustomSelect'


interface IFieldProps {
    name: string
    defaultValue: string
    label: string
    placeholder?: string
    type: 'text' | 'number' | 'date' | 'select'
}

interface ICustomFormProps {
    schema: ObjectSchema<any>
    callBackSubmit: (e: any) => void
    fields: Array<IFieldProps>
    defaultValues: DeepPartial<any>
}

export default function CustomForm(props: ICustomFormProps): React.ReactElement {

    const { control, handleSubmit } = useForm({ resolver: yupResolver(props.schema), defaultValues: { ...props.defaultValues } })

    return (
        <div>
            <form onSubmit={handleSubmit(props.callBackSubmit)}>
                {props.fields.map((fieldMap, index) => {
                    console.log(fieldMap)
                    return (
                        <div key={`control-input-form-${index}-${fieldMap.name}`}>
                            <Controller
                                name={fieldMap.name}
                                control={control}
                                defaultValue={fieldMap.defaultValue}
                                render={({ field, fieldState, formState: { errors } }) => {
                                    return <div>
                                        {fieldMap.type === 'select' ?
                                            <CustomSelect
                                                options={[]}
                                            /> :
                                            <CustomInput
                                                type={fieldMap.type}
                                                defaultValue={field.value}
                                                label={fieldMap.label}
                                                placeholder={fieldMap.placeholder}
                                            />
                                        }
                                        {errors[fieldMap.name] && errors[fieldMap.name]?.message ?
                                            <label>{errors[fieldMap.name]?.message?.toString()}</label> :
                                            null
                                        }
                                    </div>
                                }}
                            />
                        </div>
                    )
                })}
            </form>
        </div>
    )
}