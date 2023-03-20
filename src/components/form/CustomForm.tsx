import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, DeepPartial, useForm } from 'react-hook-form'
import { ObjectSchema } from 'yup'
import CustomButton from '../buttons/CustomButton'
import { CustomInput } from '../inputs/CustomInput'
import CustomSelect, { ISelectOptions } from '../select/CustomSelect'


interface IFieldProps {
    name: string
    defaultValue: string | number
    label: string
    placeholder?: string
    type: 'text' | 'number' | 'date' | 'select'
    selectProps?: {
        selectOptions: Array<ISelectOptions>
        isMultiSelect?: boolean
        callBackSearch?: (e: string) => Array<ISelectOptions>
    }
}

interface ICustomFormProps {
    // eslint-disable-next-line
    schema: ObjectSchema<any>
    // eslint-disable-next-line
    callBackSubmit: (e: any) => void
    callBackCancell: () => void
    fields: Array<IFieldProps>
    // eslint-disable-next-line
    defaultValues: DeepPartial<any>
}

export default function CustomForm(props: ICustomFormProps): React.ReactElement {

    const { control, handleSubmit } = useForm({ resolver: yupResolver(props.schema), defaultValues: { ...props.defaultValues } })

    return (
        <div>
            <form onSubmit={handleSubmit(props.callBackSubmit)}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 33%)',
                    gap: '0.3%'
                }}>
                    {props.fields.map((fieldMap, index) => {
                        return (
                            <div style={{
                            }} key={`control-input-form-${index}-${fieldMap.name}`}>
                                <Controller
                                    name={fieldMap.name}
                                    control={control}
                                    defaultValue={fieldMap.defaultValue}
                                    render={({ field, formState: { errors } }) => {
                                        return <div style={{
                                            minHeight: errors[fieldMap.name] ? '80px' : '0'
                                        }}>
                                            {fieldMap.type === 'select' && fieldMap.selectProps ?
                                                <CustomSelect
                                                    options={fieldMap.selectProps.selectOptions || []}
                                                    defaultValue={fieldMap.defaultValue}
                                                    isMulti={fieldMap.selectProps.isMultiSelect ?? false}
                                                    label={fieldMap.label}
                                                    placeholder={fieldMap.placeholder}
                                                    onBlur={field.onBlur}
                                                    onChange={field.onChange}
                                                /> :
                                                fieldMap.type !== 'select' && <CustomInput
                                                    type={fieldMap.type}
                                                    defaultValue={field.value}
                                                    label={fieldMap.label}
                                                    placeholder={fieldMap.placeholder}
                                                    onBlur={field.onBlur}
                                                    onChange={field.onChange}
                                                />
                                            }
                                            {errors[fieldMap.name] && errors[fieldMap.name]?.message ?
                                                <div style={{
                                                    paddingLeft: '12px',
                                                    paddingRight: '12px',
                                                }}>
                                                    <label style={{
                                                        color: 'red',
                                                        opacity: '85%'
                                                    }}>{errors[fieldMap.name]?.message?.toString()}</label>
                                                </div>
                                                : null
                                            }
                                        </div>
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                    padding: '2% 1% 0px 0px',
                    gap: '1.5%'
                }}>
                    <CustomButton type='button' onClick={props.callBackCancell} value='Cancelar' />
                    <CustomButton type='submit' value='Salvar' />
                </div>
            </form>
        </div>
    )
}