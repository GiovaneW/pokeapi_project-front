import React, { useState, useEffect } from 'react'
import { CustomInput } from '../inputs/CustomInput'
import { ISelectOptions } from '../select/CustomSelect'

export interface IFilterProps {
    search: string
    columnKey: string
}

declare type FilterType = 'text' | 'number' | 'select' | 'date'

interface IFilterConfig {
    placeholder?: string
    label?: string
    columnKey: string,
    filterType: FilterType
    selectOptions?: Array<ISelectOptions>
}

interface ICustomFilterProps {
    key: string
    callBackFilters: (e: Array<IFilterProps>) => void
    filtersConfig: Array<IFilterConfig>
    filters?: Array<IFilterProps>
}

export default function CustomFilters(props: ICustomFilterProps): React.ReactElement {

    const [filters, setFilters] = useState<Array<IFilterProps>>(props.filters ?? [])

    function handleFilters(filterProp: IFilterProps): void {
        // let filters = [...this.state.filters]
        if (filters.find(filter => filter.columnKey == filterProp.columnKey)) {
            if (filterProp.search.length > 3) {
                setFilters(filters.map(filter => {
                    if (filter.columnKey == filterProp.columnKey) {
                        filter.search = filterProp.search
                    }

                    return filter
                }))
            } else {
                setFilters(filters.filter(filter => filter.columnKey !== 'nome'))
            }
        } else {
            setFilters([...filters, filterProp])
        }
    }

    useEffect(() => {
        props.callBackFilters(filters)
    }, [filters])

    return (
        <div>
            {props.filtersConfig && props.filtersConfig.map((filterElement, index) => {
                return (
                    <>
                        {filterElement.filterType === 'select' ? null :
                            <CustomInput
                                key={`customFilterInput-${filterElement.columnKey}-${index}`}
                                label={filterElement.label ?? ''}
                                placeholder={filterElement.placeholder ?? ''}
                                type={filterElement.filterType}
                                onBlur={(e) => {
                                    handleFilters({ columnKey: filterElement.columnKey, search: e.target.value })
                                }} />
                        }
                    </>
                )
            })}
        </div>
    )
}