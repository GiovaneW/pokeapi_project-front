import { Box } from '@mui/material'
import React from 'react'

export interface ISelectOptions {
    key: string
    name: string
    value: string | number
}

interface ICustomSelectProps { // extends SelectProps<ISelectOptions> {
    options: Array<ISelectOptions>
    isMulti?: boolean
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLSelectElement, Element>) => void
    placeholder?: string
    label?: string
    defaultValue?: string | number
}

export default function CustomSelect(props: ICustomSelectProps): React.ReactElement {

    return (
        <Box maxWidth='400px' padding='4px 4px 0px 4px' border='none' display='grid' gridColumn='auto' >
            {props.label && <div style={{
                zIndex: 9999,
                marginBottom: '-9px'
            }}>
                <label style={{
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    fontSize: '17px',
                    paddingLeft: '0.3em',
                    paddingRight: '0.5em',
                    color: 'blueviolet',
                    fontFamily: 'monospace',
                    margin: '0.7em'
                }}>{props.label}</label>
            </div>
            }
            <select
                style={{
                    lineHeight: '1.5em',
                    padding: '8px 8px 4px',
                    margin: '0px 4px 4px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderRadius: '8px',
                    borderColor: 'blueviolet',
                    width: 'auto',
                    fontSize: '16px'
                }}
                placeholder={props.placeholder ?? ''}
                onBlur={(e) => {
                    if (props.onBlur) props.onBlur(e)
                }}
                onChange={(e) => {
                    if (props.onChange) props.onChange(e)
                }}
                // onBeforeInput={(e) => {
                //     console.log(e)
                // }}
                defaultValue={props.defaultValue ?? ''}
                // multiple={props.isMulti}
                inputMode='text'
            >
                <option hidden disabled value=''></option>
                {
                    props.options.map((option, index) => {
                        return <option key={`select-menu-item-${option.key}=${index}`} accessKey={option.key} value={option.value} >{option.name}</option>
                    })
                }
            </select>
        </Box>
    )
}