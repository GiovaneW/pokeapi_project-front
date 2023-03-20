import React from 'react'
import CustomForm from '../../components/form/CustomForm'
import { history } from '../../helpers/history'
import { ITestSchema, pokemonSchema } from '../../services/schemas/pokemonSchemas'

export default class PokemonForm extends React.Component {

    private submit(values: ITestSchema) {
        console.log(values)
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>
                    Cadastro de Pokemon
                </h1>
                <CustomForm
                    callBackSubmit={this.submit}
                    callBackCancell={() => history.goBack()}
                    defaultValues={{ name: '', age: 0, born: '', height: 0 }}
                    schema={pokemonSchema}
                    fields={
                        [
                            {
                                defaultValue: '',
                                label: 'Nome',
                                name: 'name',
                                type: 'text',
                                placeholder: 'Nome'
                            },
                            {
                                defaultValue: 0,
                                label: 'Idade',
                                name: 'age',
                                type: 'number',
                                placeholder: 'Idade'
                            }, {
                                defaultValue: '',
                                label: 'Nascimento',
                                name: 'born',
                                type: 'text',
                                placeholder: 'Nascimento'
                            }, {
                                defaultValue: '',
                                label: 'Altura',
                                name: 'height',
                                type: 'select',
                                placeholder: 'Altura',
                                selectProps: {
                                    selectOptions: [
                                        {
                                            key: '1',
                                            name: '1',
                                            value: 1
                                        },
                                        {
                                            key: '2',
                                            name: '2',
                                            value: 2
                                        },
                                        {
                                            key: '3',
                                            name: '3',
                                            value: 3
                                        },
                                        {
                                            key: '4',
                                            name: '4',
                                            value: 4
                                        },
                                        {
                                            key: '5',
                                            name: '5',
                                            value: 5
                                        }
                                    ]

                                }
                            }, {
                                defaultValue: '',
                                label: 'Nascimento',
                                name: 'born',
                                type: 'text',
                                placeholder: 'Nascimento'
                            }, {
                                defaultValue: 0,
                                label: 'Altura',
                                name: 'height',
                                type: 'number',
                                placeholder: 'Altura'
                            }, {
                                defaultValue: '',
                                label: 'Nascimento',
                                name: 'born',
                                type: 'text',
                                placeholder: 'Nascimento'
                            }, {
                                defaultValue: 0,
                                label: 'Altura',
                                name: 'height',
                                type: 'number',
                                placeholder: 'Altura'
                            },
                        ]
                    }
                />
            </div>
        )
    }
}