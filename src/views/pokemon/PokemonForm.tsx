import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomForm from '../../components/form/CustomForm'
import { Toast } from '../../components/toast/Toast'
import { history } from '../../helpers/history'
import { IPokemon } from '../../services/interfaces/pokemonInterfaces'
import { pokemonSchema } from '../../services/schemas/pokemonSchemas'
import { createPokemon, getPokemon, updatePokemon } from '../../services/searches/pokemon/pokemonService'

interface IPokemonFormState {
    urlPaths: Array<string>
    pokemonData?: IPokemon
}
export default class PokemonForm extends React.Component<any, IPokemonFormState> {

    constructor(props: any) {
        super(props)
        this.state = {
            urlPaths: history.getUrlPaths()
        }

    }

    componentDidMount(): void {
        if (this.state.urlPaths[2] && Number(this.state.urlPaths[2])) {
            this.getPokemonData(Number(this.state.urlPaths[2]))
        }
    }

    private async getPokemonData(internal_id: number): Promise<void> {
        getPokemon(internal_id).then(res => {
            if (res.error || res.message) Toast({ message: res.error || res.message, severity: res.error ? 'error' : 'info' })
            if (res.data)
                this.setState({
                    ...this.state,
                    pokemonData: res.data
                })
        })
    }

    private async submit(values: IPokemon) {
        if (this.state.urlPaths[2] && Number(this.state.urlPaths[2])) {
            updatePokemon(values, Number(this.state.urlPaths[2])).then(res => {
                Toast({ message: res.error || res.message, severity: res.error ? 'error' : 'success' })
                if (!res.error) {
                    document.getElementById('pokemons-list')?.click()
                }
            })
        } else {
            createPokemon(values).then(res => {
                Toast({ message: res.error || res.message, severity: res.error ? 'error' : 'success' })
                if (!res.error) {
                    document.getElementById('pokemons-list')?.click()
                }
            })
        }
    }

    render(): React.ReactNode {
        console.log('Render')
        return (
            <div>

                <h1>
                    <NavLink id='pokemons-list' to='/pokemons' style={{ textDecoration: 'none', color: 'inherit' }}>
                        {Number(this.state.urlPaths[2]) ? 'Edição de Pokémon' : 'Cadastro de Pokémon'}
                    </NavLink>
                </h1>
                <CustomForm
                    callBackSubmit={(e) => this.submit(e)}
                    callBackCancell={() => history.goBack()}
                    defaultValues={this.state.pokemonData || {}}
                    schema={pokemonSchema}
                    fields={{
                        form: [
                            { defaultValue: '', label: 'Nome', name: 'name', type: 'text', placeholder: 'Nome', require },
                            { defaultValue: '', label: 'Ordem', name: 'order', type: 'number', placeholder: 'Ordem' },
                            { defaultValue: '', label: 'Peso', name: 'weight', type: 'text', placeholder: 'Peso' },
                            { defaultValue: '', label: 'Altura', name: 'height', type: 'number', placeholder: 'Altura' },
                            { defaultValue: '', label: 'Experiência Básica', name: 'base_experience', type: 'number', placeholder: 'Experiência Básica' },
                            { defaultValue: '', label: 'Encontra-se em:', name: 'location_area_encounters', type: 'text', placeholder: 'Encontra-se em' },
                            { defaultValue: '', label: 'Padrão', name: 'is_default', type: 'boolean', placeholder: 'Padrão' }
                        ],
                        sprites: [
                            { defaultValue: '', label: 'Rosto (padrão)', name: 'sprites.front_default', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Costas (padrão)', name: 'sprites.back_default', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Costas (feminino)', name: 'sprites.back_female', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Rosto (shiny)', name: 'sprites.front_shiny', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Costas (shiny)', name: 'sprites.back_shiny', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Rosto (shiny e feminino)', name: 'sprites.front_shiny_female', type: 'text', placeholder: 'Url da imagem' },
                            { defaultValue: '', label: 'Costas (shiny e feminino)', name: 'sprites.back_female_siny', type: 'text', placeholder: 'Url da imagem' },
                        ]
                    }}
                />
            </div>
        )
    }
}