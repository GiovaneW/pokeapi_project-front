import React, { useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import CustomFilters, { IFilterProps } from '../../components/filters/CustomFilter'
import { CustomInput } from '../../components/inputs/CustomInput'
import { CustomTable, ITableColumn } from '../../components/table/CustomTable'
import { toTitleCase } from '../../helpers/TextHelpers'



interface IDataTest {
    id: number
    nome: string
    idade: number
    naturalidade: string
    nascimento: Date
    estadoCivil: string
    endereco?: {
        rua: string
    }
}

const data: Array<IDataTest> = [
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Giovane Welter'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Giovane'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Welter'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'caçando',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: '06'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'preso',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Bonfim'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'amarrado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Rhode'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        id: Number((Math.random() * 100).toFixed(0)),
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    }
]
const testColumns: Array<ITableColumn<IDataTest>> = [
    {
        key: 'id',
        title: 'ID'
    },
    {
        key: 'nome',
        title: 'Nome',
        order: {
            dataType: 'string'
        }
    },
    {
        key: 'idade',
        title: 'Idade',
        order: {
            dataType: 'number'
        }
    },
    {
        key: 'nascimento',
        title: 'Data de Nascimento',
        render: (e) => { return e.nascimento.toLocaleDateString() },
        order: {
            dataType: 'date'
        }
    },
    {
        key: 'naturalidade',
        title: 'Naturalidade',
        render: (e) => toTitleCase(e.naturalidade),
        order: {
            dataType: 'string'
        }
    },
    {
        key: 'estadoCivil',
        title: 'Estado Civil',
        render: (e) => toTitleCase(e.estadoCivil),
        order: {
            dataType: 'string'
        }
    }
]

interface PokemonListViewState {
    filters: Array<IFilterProps>
    data: Array<IDataTest>
    columns: Array<ITableColumn<IDataTest>>
}

export interface PokemonListViewProps {
    treta?: string
}
export default class PokemonList extends React.Component<PokemonListViewProps, PokemonListViewState> {

    constructor(props: PokemonListViewProps) {
        super(props)
        this.state = {
            filters: [],
            data: data,
            columns: testColumns
        }
    }

    componentDidMount(): void {
        console.log('component did mount')
        console.log(this.state)
    }

    componentDidUpdate(prevProps: Readonly<PokemonListViewProps>, prevState: Readonly<PokemonListViewState>, snapshot?: any): void {
        console.log('component did update')
        console.log(this.state)
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('component did catch')
        console.log(error)
        console.log(errorInfo)
    }

    componentWillUnmount(): void {
        console.log('component will unmount')
    }

    shouldComponentUpdate(nextProps: Readonly<PokemonListViewProps>, nextState: Readonly<PokemonListViewState>, nextContext: any): boolean {
        console.log('should component update')
        return true
    }

    private handleFilters(filters: Array<IFilterProps>): void {
        this.setState({
            ...this.state,
            filters: filters
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: 'inherit' }}>
                <CustomFilters
                    key='customFilters'
                    callBackFilters={this.handleFilters}
                    filtersConfig={[{
                        columnKey: 'nome',
                        filterType: 'text',
                        label: 'Nome',
                        placeholder: 'Pesquise pelo nome'
                    }]}
                />
                <CustomTable data={this.state.data} columns={this.state.columns} filters={this.state.filters} />
            </div >
        )
    }
}
