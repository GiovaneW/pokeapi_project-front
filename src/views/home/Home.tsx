import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomTable, ITableColumn } from '../../components/table/CustomTable'
import { toTitleCase } from '../../helpers/TextHelpers'
import { IObjectLiteral } from '../../interfaces/defIntefaces'


interface IDataTest {
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
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Giovane Welter'
    },
    {
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Giovane'
    },
    {
        estadoCivil: 'solteiro',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Welter'
    },
    {
        estadoCivil: 'caçando',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: '06'
    },
    {
        estadoCivil: 'preso',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Bonfim'
    },
    {
        estadoCivil: 'amarrado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Rhode'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
        estadoCivil: 'mussum ensaboado',
        idade: 28,
        nascimento: new Date(1995, 1, 18),
        naturalidade: 'Fim do mundo',
        nome: 'Yago'
    },
    {
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
        title: 'ID',
    }, 
    {
        key: 'nome',
        title: 'Nome',
    },
    {
        key: 'idade',
        title: 'Idade'
    },
    {
        key: 'nascimento',
        title: 'Data de Nascimento',
        render: (e) => { return e.nascimento.toLocaleDateString() }
    },
    {
        key: 'naturalidade',
        title: 'Naturalidade',
        render: (e) => toTitleCase(e.naturalidade)
    },
    {
        key: 'estadoCivil',
        title: 'Estado Civil',
        render: (e) => toTitleCase(e.estadoCivil)
    }
]

export function Home(): React.ReactElement {
    const { id } = useParams()

    return (
        <div style={{ backgroundColor: 'inherit' }}>
            <CustomTable data={data} callBackPage={(page) => console.log(page)} columns={testColumns} />
        </div>
    )
}