import { Box } from '@mui/material'
import React from 'react'

export interface ICustomInputsProps {
    type: 'text' | 'number' | 'date'
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string
    defaultValue?: string | number | Date
    required?: boolean
    name?: string
}

export function CustomInput(props: ICustomInputsProps): React.ReactElement {
    // const [value, setValue] = useState('')

    // function clearInput() {
    //     setValue('')
    // }

    return (
        <Box maxWidth='400px' padding='4px' border='none' display='grid' gridColumn='auto' >
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
            {props.type === 'date' || props.defaultValue instanceof Date ? null :
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
                        width: 'auto'
                    }}
                    value={props.defaultValue ?? undefined}
                    placeholder={props.placeholder ?? ''}
                    onBlur={(e) => {
                        if (props.onBlur) props.onBlur(e)
                    }}
                    onChange={(e) => {
                        if (props.onChange) props.onChange(e)
                    }} />
            }
        </Box>
    )
}