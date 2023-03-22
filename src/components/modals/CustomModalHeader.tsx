import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { toTitleCase } from '../../helpers/TextHelpers'

export interface ICustomModalHeaderProps {
    style?: React.CSSProperties
    title: string
    onClose: () => void
    hideCloseButton?: boolean
}

export function CustomModalHeader(props: ICustomModalHeaderProps): React.ReactElement<'CustomModalHeader'> {
    return (
        <div id='modal-header' style={{
            backgroundColor: 'blueviolet',
            padding: '1.5% 0.5% 0.5% 2.5%',
            height: '40px',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '25px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            ...props.style
        }}>
            {toTitleCase(props.title)}
            {!props.hideCloseButton && <IconButton
                onClick={props.onClose}
                style={{
                    marginTop: '-2%'
                }}
            >

                <Close style={{
                    cursor: 'pointer'
                }} />
            </IconButton>}
        </div>
    )
}