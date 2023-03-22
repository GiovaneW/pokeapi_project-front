import React from 'react'

export interface ICustomModalBodyProps {
    style?: React.CSSProperties
    children: React.ReactElement | React.ReactElement[]
}

export function CustomModalBody(props: ICustomModalBodyProps): React.ReactElement {
    return (
        <div id='modal-body' style={{
            padding: '1% 3% 1% 3%',
            ...props.style
        }}>
            {props.children}
        </div>
    )
}