import React from 'react'

export interface ILabelInfoProps {
    info?: string
    children?: string
    label: string
    style?: React.CSSProperties
}

export function LabelInfo(props: ILabelInfoProps): React.ReactElement {
    return (
        <label style={props.style}>
            <b>{props.label} : </b> {props.children ?? props.info ?? '-'}
        </label>
    )
}