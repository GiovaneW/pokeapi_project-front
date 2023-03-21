import React from 'react'
import CustomForm from '../../components/form/CustomForm'
import { history } from '../../helpers/history'
import { IPokeSchema, pokemonSchema } from '../../services/schemas/pokemonSchemas'

export default class PokemonForm extends React.Component {

    private submit(values: IPokeSchema) {
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
                    defaultValues={{ is_default: false }}
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
                                defaultValue: '',
                                label: 'Ordem',
                                name: 'order',
                                type: 'number',
                                placeholder: 'Ordem'
                            }, {
                                defaultValue: '',
                                label: 'Peso',
                                name: 'weight',
                                type: 'text',
                                placeholder: 'Peso'
                            }, {
                                defaultValue: '',
                                label: 'Altura',
                                name: 'height',
                                type: 'number',
                                placeholder: 'Altura'
                            }, {
                                defaultValue: '',
                                label: 'Experiência Básica',
                                name: 'base_experience',
                                type: 'number',
                                placeholder: 'Experiência Básica'
                            }, {
                                defaultValue: '',
                                label: 'Encontra-se em:',
                                name: 'location_area_encounters',
                                type: 'text',
                                placeholder: 'Encontra-se em:'
                            }, {
                                defaultValue: '',
                                label: 'Padrão',
                                name: 'is_default',
                                type: 'boolean',
                                placeholder: 'Padrão'
                            },
                            {
                                defaultValue: '',
                                label: 'Padrão',
                                name: 'is_default',
                                type: 'date',
                                placeholder: 'Padrão'
                            }
                        ]
                    }
                />
            </div>
        )
    }
}