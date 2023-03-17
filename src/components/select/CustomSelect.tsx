import { MenuItem, Select } from '@mui/material'
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
            <Select>
                <MenuItem>Teste</MenuItem>
                <MenuItem>Teste 2</MenuItem>
            </Select>
        </div>
    )
}