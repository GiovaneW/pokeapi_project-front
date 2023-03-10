import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Box, IconButton, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { dataComparision } from '../../helpers/dataComparision'
import { stringOrder } from '../../helpers/dataOrdering'

interface ICustomDataTable {
    // eslint-disable-next-line
    [key: string]: any
}

export interface ITableColumn<T extends ICustomDataTable> {
    title: string
    key: string
    headAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    rowAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    render?: (e: T) => React.ReactElement | string | number
    width?: number
    order?: {
        dataType: 'string' | 'number' | 'date'
        startOrder?: 'asc' | 'desc'
    }
}

interface ITableProps<T extends ICustomDataTable> {
    title?: string
    columns: Array<ITableColumn<T>>
    data: Array<T>
    callBackPage?: (page: number) => void
    filters?: Array<IFilterProps>
    rows?: number
    rowsPerPage?: number
    customSortFunction?: (a: T, b: T) => number
}

interface IOrderProps {
    order: 'asc' | 'desc' | 'unset'
    fieldType: string
    columnKey: string
}

export interface IFilterProps {
    search: string
    columnKey: string
}

function Header(props: { columns: Array<ITableColumn<ICustomDataTable>>, callBackOrder: (callBackParams: IOrderProps) => void }): React.ReactElement {
    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                    {props.columns.map((column, index) => {
                        return (
                            <TableCell style={{ fontWeight: 'bold', padding: '10px', minWidth: '40px' }} key={'tableHeadCell' + index}>
                                <Box alignItems='center' display='flex' flexDirection='row' flexWrap='nowrap' justifyContent='space-between'>
                                    <Box width='100%' textAlign={column.headAlign ?? 'left'}>
                                        {column.title}
                                    </Box>
                                    {column.order &&
                                        <TableOrderButton
                                            key={'tableHeadOrderButton' + index}
                                            orderProps={
                                                {
                                                    columnKey: column.key, fieldType: column.order?.dataType, order: column.order?.startOrder ?? 'unset'
                                                }}
                                            callBackOrder={props.callBackOrder}
                                        />}
                                </Box>
                            </TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
        </React.Fragment >
    )
}

function Row(props: { data: ICustomDataTable, columns: Array<ITableColumn<ICustomDataTable>> }): React.ReactElement {
    return (
        <React.Fragment>
            <TableRow>
                {
                    props.columns.map((column, index) => {
                        return (
                            <TableCell style={{
                                padding: '10px',
                                minWidth: '40px'
                            }} align={column.rowAlign || 'left'} key={'customCell' + index} >
                                {column.render != null ? column.render(props.data) :
                                    String(props.data[column.key] ?? '')}
                            </TableCell>
                        )
                    })
                }
            </TableRow>
        </React.Fragment>
    )
}

function TableOrderButton(props: { orderProps: IOrderProps, callBackOrder: (orderProps: IOrderProps) => void }): React.ReactElement {
    const [orderProps, setOrderProps] = useState<IOrderProps>(props.orderProps)

    function handleOrder() {
        if (orderProps.order === 'unset') {
            setOrderProps({ ...orderProps, order: 'asc' })
        } else if (orderProps.order === 'asc') {
            setOrderProps({ ...orderProps, order: 'desc' })
        } else {
            setOrderProps({ ...orderProps, order: 'unset' })
        }
    }

    useEffect(() => {
        props.callBackOrder(orderProps)
    }, [orderProps])

    return (
        <IconButton
            style={{
                display: 'flex',
                flexDirection: 'column-reverse'
            }}
            onClick={() => handleOrder()}
        >
            <ArrowDropUp style={{
                opacity: orderProps.order === 'desc' ? '100%' : '50%'
            }} className='arrowIconOrder' />
            <ArrowDropDown style={{
                opacity: orderProps.order === 'asc' ? '100%' : '50%'
            }} className='arrowIconOrder' />
        </IconButton>
    )
}

// eslint-disable-next-line
export function CustomTable(props: ITableProps<any>): React.ReactElement {
    // eslint-disable-next-line
    const [data, setData] = useState<Array<any>>(props.data ?? [])
    const [rowsPerPage, setRowsPerPage] = useState<number>(props.rowsPerPage ?? 10)
    const [page, setPage] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [orders, setOrders] = useState<Array<IOrderProps>>([])

    function pageHandler(page: number): void {
        if (!(page < 0) && !(page > totalPages)) {
            setPage(page)
        }
    }

    function callBackOrder(cbOrderProps: IOrderProps): void {
        if (!orders.find(value => value.columnKey === cbOrderProps.columnKey) && cbOrderProps.order !== 'unset') {
            setOrders([...orders, cbOrderProps])
        } else if (cbOrderProps.order === 'unset') {
            setOrders(orders.filter(currentProp => currentProp.columnKey !== cbOrderProps.columnKey))
        } else {
            const auxOrderProps = orders.filter(currentProp => currentProp.columnKey !== cbOrderProps.columnKey)
            auxOrderProps.push(cbOrderProps)
            setOrders(auxOrderProps)
            // setOrders(orders.map(orderProp => {
            //     if (orderProp.columnKey === cbOrderProps.columnKey) {
            //         orderProp.order = cbOrderProps.order
            //     }
            //     return orderProp
            // }))
        }
    }

    function filterData(filters: Array<IFilterProps>): void {
        // console.log('filters')
        // console.log(filters)
        let match: boolean
        setData(props.data.filter(elementData => {
            match = true
            for (const filter of filters) {
                // console.log(filter.search)
                if (dataComparision({ firstItem: String(elementData[filter.columnKey] || ''), secondItem: filter.search }) < 0.9) {
                    match = false
                    break
                }
            }

            if (match) return elementData
        }))
    }

    function orderData(): void {
        let result: number, sortOrder: number
        const auxDataList = [...data]

        if (!(orders.length > 0)) {
            auxDataList.sort((a, b) => {
                return a['id'] < b['id'] ? -1 : 1
            })
        } else {
            auxDataList.sort((a, b) => {
                result = 0
                for (let i = orders.length - 1; i >= 0; i--) {
                    sortOrder = orders[i].order === 'asc' ? 1 : -1
                    if (orders[i].fieldType === 'date') {
                        result = new Date(a[orders[i].columnKey]) < new Date(b[orders[i].columnKey]) ? 1 : -1
                    } else if (orders[i].fieldType == 'number') {
                        result = a[orders[i].columnKey] < b[orders[i].columnKey] ? 1 : -1
                    } else {
                        result = String(a[orders[i].columnKey]).localeCompare(String(b[orders[i].columnKey]), 'pt-BR', { numeric: true })
                    }
                    result *= sortOrder

                    if (result !== sortOrder) break
                }
                return result
            })
        }
        setData(auxDataList)
    }

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    useEffect(() => {
        // if (props.filters?.length)
        filterData(props.filters ?? [])
    }, [props.filters])

    useEffect(() => {
        orderData()
    }, [orders])

    useEffect(() => {
        setOffset(rowsPerPage * page)
    }, [page, rowsPerPage])

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / rowsPerPage))
    }, [rowsPerPage, data])

    return (
        <Box>
            <Table>
                <Header columns={props.columns} callBackOrder={callBackOrder} />
                <TableBody>

                    {
                        data.length ? data.slice(offset, offset + rowsPerPage).map((elementData, index) => {
                            return (
                                <Row data={elementData} columns={props.columns} key={'customRow' + index} />
                            )
                        }) : <TableRow />
                    }

                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            page={page}
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            labelRowsPerPage='Linhas por página:'
                            onRowsPerPageChange={(e) => { setRowsPerPage(Number(e.target.value)) }}
                            onPageChange={(_, page) => {
                                pageHandler(page)
                                if (props?.callBackPage) props.callBackPage(page)
                            }}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Box>
    )
}