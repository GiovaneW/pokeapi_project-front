import React from 'react'

export interface ILabelInfoProps {
    children: string
    label: string
    style?: React.CSSProperties
}

export function CustomLabel(props: ILabelInfoProps): React.ReactElement {
    return (
        <label style={props.style}>
            {props.children ?? '-'}
        </label>
    )
}