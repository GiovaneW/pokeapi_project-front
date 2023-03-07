import { Box, Button, Icon, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

export interface ITableColumn<T> {
    title: string
    key: string
    headAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    rowAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    render?: (e: T) => React.ReactElement | string | number
    width?: number
}

interface ITableProps<T> {
    title?: string
    columns: Array<ITableColumn<T>>
    data: Array<T>
    callBackPage: (page: number) => void
    rows?: number
    rowsPerPage?: number
}


function Header(props: { columns: Array<ITableColumn<any>> }): React.ReactElement {
    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                    {props.columns.map((column, index) => {
                        return (
                            <TableCell align={column.headAlign ?? 'left'} key={'tableHeadCell' + index}>
                                {column.title}
                            </TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
        </React.Fragment >
    )
}

function Row(props: { data: any, columns: Array<ITableColumn<any>> }): React.ReactElement {
    return (
        <React.Fragment>
            <TableRow>
                {
                    props.columns.map((column, index) => {
                        return (
                            <TableCell align={column.rowAlign || 'center'} key={'customCell' + index} >
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


export function CustomTable(props: ITableProps<any>): React.ReactElement {
    const [data, setData] = useState<typeof props.data>([])
    const [rowsPerPage, setRowsPerPage] = useState<number>(props.rowsPerPage ?? 10)
    const [page, setPage] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)

    function pageHandler(page: number) {
        if (!(page < 0) && !(page > totalPages)) {
            setPage(page)
        }
    }

    useEffect(() => {
        setOffset(rowsPerPage * page)
    }, [page, rowsPerPage])

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / rowsPerPage))
    }, [rowsPerPage])

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (
        <Box>
            <Table>
                <Header columns={props.columns} />
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
                            onPageChange={(_, page) => pageHandler(page)}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Box>
    )
}