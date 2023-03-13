import React from 'react'

export interface ISelectOptions {
    key: string
    label: string
    value: string | number | Date
}

interface ICustomSelectProps {
    options: Array<ISelectOptions>
}

export default function CustomSelect(props: ICustomSelectProps): React.ReactElement {

    return (
        <div>
            vai ter um select aqui em algum momento da vida
        </div>
    )
}