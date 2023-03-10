import { Box, Input, InputProps } from '@mui/material'
import React from 'react'

export interface ICustomInputsProps {
    type: 'text' | 'number' | 'date'
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
    placeholder?: string
}

export function CustomInput(props: ICustomInputsProps): React.ReactElement {
    return (
        <Box maxWidth='400px' padding='4px' border='none' display='grid' gridColumn='auto' >
            {props.placeholder && <div style={{
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
                }}>{props.placeholder}</label>
            </div>
            }
            <input style={{
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
            }} onBlur={(e) => {
                if (props.onBlur) props.onBlur(e)
            }} />
        </Box>
    )
}