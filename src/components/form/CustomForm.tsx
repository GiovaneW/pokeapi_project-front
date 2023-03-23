import { yupResolver } from '@hookform/resolvers/yup'
import { Divider, Switch, ToggleButton } from '@mui/material'
import { maxWidth } from '@mui/system'
import { watch } from 'fs'
import React, { useEffect, useRef, useState } from 'react'
import { Controller, DeepPartial, useForm } from 'react-hook-form'
import { ObjectSchema } from 'yup'
import { toTitleCase } from '../../helpers/TextHelpers'
import CustomButton from '../buttons/CustomButton'
import { CustomInput } from '../inputs/CustomInput'
import CustomSelect, { ISelectOptions } from '../select/CustomSelect'
import CustomSwitch from '../togles/CustomSwitch'


interface IFieldProps {
    name: string
    defaultValue: string | number
    label: string
    placeholder?: string
    type: 'text' | 'number' | 'date' | 'select' | 'boolean'
    require?: NodeRequire
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
    fields: {
        form: Array<IFieldProps>
        [sections: string]: Array<IFieldProps>
    }
    // eslint-disable-next-line
    defaultValues: DeepPartial<any>
}
/**
 * @author Giovane Augusto Welter
 * 
 * Atenção jovi developi
 * 
 * @param {{form: Array<IFieldProps>, [sections]: Array<IFieldProps>}} props.fields seus atributos, obrigatórios ou não esperam um array de objetos do tipo IFieldProps
 * @param {Array<IFieldProps>} fields.form parâmetro padrao de fields, é o obrigatório e corresponde ao form padrão
 * @param {Array<IFieldProps>} fields.[sections] depois de form podem haver quantos outros você quiser, o único ponto de atenção o form vai adicionar um divider em seu 
 * corpo e colocar uma tag h3 com o nome do atributo em title case, se o nome tiver que ser composto coloque-o entre aspas e não separe com "_" e nem escreva em camel case
 * 
 * @param {ObjectSchema<T>} props.schema espera uma definição de schema do yup
 * @param {DeepPartial<T>} props.defaultValues dados iniciais do form (normalmente é passado quando você quer editar um registro, pode passar um objeto vazio para form de cadastro)
 * 
 * @param {() => void} props.callBackCancell ação que deve ser tomada na desistência de executar a ação do formulário
 * @param {(e: T) => void} props.callBackSubmit função que deve receber os dados do form e a partir daí fazer a devida comunicação com o backend 
 * 
 * @interface ICustomFormProps props gerais do form
 * @interface IFieldProps props dos fields/campos do form
 * 
 * @returns ReactElement
 * 
 * 
 * 
 * ``!!! ATENÇÃO !!! ``
 * @ As funções de callback sempre são implementadas nas telas nunca no form (NUNCA)
 * @ Criar função de submit genérica é tiro no pé e pedir pra passar raiva
 * @ Se não sabe trabalhar com callBacks precisa aprender javascript antes de react (assincronismo é fundamental jovi) (exposed)
 */
export default function CustomForm(props: ICustomFormProps): React.ReactElement {

    const { control, handleSubmit, setValue, watch } = useForm({ resolver: yupResolver(props.schema) })

    useEffect(() => {
        Object.entries(props.defaultValues).forEach(entry => {
            setValue(entry[0], entry[1])
        })
    }, [Object.entries(props.defaultValues).length > 0])

    return (
        <div>
            <form onSubmit={handleSubmit(props.callBackSubmit)}>
                {Object.entries(props.fields).map((section, index) => {
                    return <div key={`input-form-section-${index}`}>
                        {section[0] !== 'form' &&
                            <div style={{
                                height: '5px',
                                padding: '1.5% 2.5% 0% 2%',
                            }}>
                                <Divider />
                            </div>
                        }
                        {section[0] !== 'form' && <h3 style={{ margin: '0% 0% 0.8% 2%' }} >{toTitleCase(section[0])}</h3>}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 33%)',
                                gap: '0.3%'
                            }}
                        >
                            {section[1].map((fieldMap, index) => {
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
                                                            defaultValue={field.value}
                                                            isMulti={fieldMap.selectProps.isMultiSelect ?? false}
                                                            label={fieldMap.label}
                                                            placeholder={fieldMap.placeholder}
                                                            onBlur={field.onBlur}
                                                            onChange={field.onChange}
                                                            isrequired={fieldMap.require}
                                                        /> :
                                                        fieldMap.type === 'boolean' ?
                                                            <CustomSwitch
                                                                label={fieldMap.label}
                                                                // placeholder={fieldMap.placeholder}
                                                                checked={Boolean(field.value)}
                                                                onChange={field.onChange}
                                                                value={Boolean(field.value)}
                                                                onBlur={field.onBlur}
                                                                isrequired={fieldMap.require}
                                                            /> :
                                                            fieldMap.type !== 'select' && <CustomInput
                                                                type={fieldMap.type}
                                                                defaultValue={field.value}
                                                                label={fieldMap.label}
                                                                placeholder={fieldMap.placeholder}
                                                                onBlur={field.onBlur}
                                                                onChange={field.onChange}
                                                                isrequired={fieldMap.require}
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
                    </div>
                })}
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