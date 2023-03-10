import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CustomInput } from '../../components/inputs/CustomInput'
import { CustomTable, IFilterProps, ITableColumn } from '../../components/table/CustomTable'
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

export default function PokemonList(): React.ReactElement {
    const { id } = useParams()

    const [filters, setFilters] = useState<Array<IFilterProps>>([])

    function handleFilters(filterProp: IFilterProps): void {
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

    return (
        <div style={{ backgroundColor: 'inherit' }}>
            <div>
                <CustomInput
                    placeholder='Nome'
                    type='text'
                    onBlur={(e) => {
                        handleFilters({ columnKey: 'nome', search: e.target.value })
                    }} />
            </div>
            <CustomTable data={data} columns={testColumns} filters={filters} />
        </div >
    )
}