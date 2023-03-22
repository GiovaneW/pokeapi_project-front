import React from 'react'

export interface ICustomModalFooterProps {
    style?: React.CSSProperties
    children: React.ReactElement | React.ReactElement[]
}

export function CustomModalFooter(props: ICustomModalFooterProps): React.ReactElement {
    return (
        <div id='modal-footer' style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '1%',
            padding: '1% 2.5% 1% 2.5%',
            ...props.style
        }}>
            {props.children}
        </div>
    )
}