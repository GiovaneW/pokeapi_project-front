import React, { useState, useEffect } from 'react'
import CustomButton from '../buttons/CustomButton'
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

    // function clearFilters() {
    //     setFilters([])
    //     props.callBackFilters([])
    // }

    useEffect(() => {
        if (filters.length)
            props.callBackFilters(filters)
    }, [])

    return (
        <div key={`filterComponent-${Math.ceil(Math.random())}`}>
            {props.filtersConfig.length > 0 &&
                <>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `${props.filtersConfig.length === 1 ? 'repeat(1, 100%)' : `repeat(${Math.min(4, props.filtersConfig.length)}, ${Math.fround(100 / Math.max(3, Math.min(4, props.filtersConfig.length)))}%)`}`
                    }}>

                        {props.filtersConfig.map((filterElement, index) => {
                            return (
                                <React.Fragment key={`customFilterInput-${filterElement.columnKey}-${index}`}>
                                    {filterElement.filterType === 'select' ? <div key={`customFilterInput-${filterElement.columnKey}-${index}`}></div> :
                                        <CustomInput
                                            label={filterElement.label ?? ''}
                                            placeholder={filterElement.placeholder ?? ''}
                                            type={filterElement.filterType}
                                            onBlur={(e) => {
                                                handleFilters({ columnKey: filterElement.columnKey, search: e.target.value })
                                            }} />
                                    }
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        padding: '2px',
                        gap: '10px'
                    }}>
                        {/* <CustomButton type='button' onClick={() => console.log('treta')}>Limpar Filtros</CustomButton> */}
                        <CustomButton type='button' onClick={() => props.callBackFilters(filters)}>Filtrar Resultados</CustomButton>
                    </div>
                </>
            }
        </div>
    )
}