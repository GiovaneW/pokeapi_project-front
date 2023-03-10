import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CustomTable, IFilterProps, ITableColumn } from '../../components/table/CustomTable'
import { toTitleCase } from '../../helpers/TextHelpers'

export default function Home(): React.ReactElement {
    const { id } = useParams()

    const [filters, setFilters] = useState<Array<IFilterProps>>([])

    return (
        <div style={{ backgroundColor: 'inherit' }}>
            <label>
                Welcome bitches!
            </label>
        </div>
    )
}