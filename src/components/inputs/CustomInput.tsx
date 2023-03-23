import { Box } from '@mui/material'
import React from 'react'

export interface ICustomInputsProps {
    type: 'text' | 'number' | 'date' | 'datetime' | 'datetime-local'
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string
    defaultValue?: string | number
    name?: string
    isrequired?: NodeRequire
}

export function CustomInput(props: ICustomInputsProps): React.ReactElement {
    return (
        <Box maxWidth='400px' padding='4px 4px 0px 4px' border='none' display='grid' gridColumn='auto' >
            {props.label && <div style={{
                zIndex: 9998,
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
                }}>{props.label}{props.isrequired ? '*' : ''}</label>
            </div>
            }
            <input
                style={{
                    borderStyle: 'solid',
                    borderColor: 'blueviolet',
                    borderWidth: '1px',
                    borderRadius: '8px',
                    lineHeight: '1.5em',
                    padding: '8px',
                    paddingBottom: '0.5px',
                    fontSize: '16px',
                    margin: '4px',
                    marginTop: '0',
                    width: 'auto',
                    wordWrap: 'break-word'
                }}
                type={props.type}
                defaultValue={props.defaultValue ?? undefined}
                placeholder={props.placeholder ?? ''}
                onBlur={(e) => {
                    if (props.onBlur) props.onBlur(e)
                }}
                onChange={(e) => {
                    if (props.onChange) props.onChange(e)
                }} />
        </Box>
    )
}