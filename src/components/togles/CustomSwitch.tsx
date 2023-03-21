import { Box, Switch, SwitchProps } from '@mui/material'
import { bgcolor } from '@mui/system'
import React from 'react'

interface ICustomSwitchProps extends SwitchProps {
    label?: string
}

export default function CustomSwitch(props: ICustomSwitchProps): React.ReactElement {
    return (
        <Box maxWidth='400px' padding='4px 4px 0px 4px' border='none' display='grid' gridColumn='auto' >
            {props.label && <div style={{
                zIndex: 9998,
                marginBottom: '-9px',
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
            <div style={{
                maxHeight: '30px',
                padding: '4px 0px 0px 4px'
            }} >
                <Switch style={{
                    ...props.style,
                    borderStyle: 'solid'
                }} {...props} />
            </div>
        </Box>
    )
}