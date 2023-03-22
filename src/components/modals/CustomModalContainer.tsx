import React from 'react'
import { ICustomModalBodyProps } from './CustomModalBody'
import { ICustomModalFooterProps } from './CustomModalFooter'
import { ICustomModalHeaderProps } from './CustomModalHeader'

interface ICustomModalContainerProps {
    style?: React.CSSProperties
    children: [
        React.ReactElement<ICustomModalHeaderProps, 'CustomModalHeader'>,
        React.ReactElement<ICustomModalBodyProps, 'CustomModalBody'>,
        React.ReactElement<ICustomModalFooterProps, 'CustomModalFooter'>
    ]
}

export function CustomModalContainer(props: ICustomModalContainerProps): React.ReactElement<'CustomModalContainer'> {
    return (
        <div id='modalContainer' style={{
            ...props.style,
            backgroundColor: 'white',
            maxWidth: '1000px',
            width: '80%',
            overflowY: 'auto',
            borderRadius: '8px',
            height: 'fit-content'
        }}>
            {props.children}
        </div>
    )
}