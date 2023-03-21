import React from 'react'
import CustomButton from '../../components/buttons/CustomButton'
import CustomFilters, { IFilterProps } from '../../components/filters/CustomFilter'
import { CustomTable, ITableColumn } from '../../components/table/CustomTable'
import CustomTableOptionsMenu from '../../components/table/CustomTableOptionsMenu'
import { Toast } from '../../components/toast/Toast'
import { toTitleCase } from '../../helpers/TextHelpers'
import { IPokemon } from '../../services/interfaces/pokemonInterfaces'
import { listPokemons } from '../../services/searches/pokemon/pokemonService'

export interface TPokemonListData extends Omit<IPokemon, 'moves' | 'past_types' | 'game_indices'> {
    internal_id: number
}
const testColumns: Array<ITableColumn<TPokemonListData>> = [
    {
        key: 'internal_id',
        // render: (e) => e.nest.id,
        title: 'ID'
    },
    {
        key: 'sprites.front_default',
        title: 'Sprite',
        render: (e) => {
            return (
                <img src={e.sprites.front_default ?? e.sprites.front_shiny ?? ''} />
            )
        }
    },
    {
        key: 'name',
        title: 'Nome',
        render: (e) => toTitleCase(e.name),
        order: {
            dataType: 'string'
        }
    },
    {
        key: 'base_experience',
        title: 'Experiência Básica',
        render: (e) => e.base_experience,
        order: {
            dataType: 'number'
        }
    },
    {
        key: 'nest.height',
        title: 'Altura',
        // render: (e) => e.nest.height,
        order: {
            dataType: 'number'
        }
    },
    {
        key: 'order',
        title: 'Ordem',
        // render: (e) => e.nest.order,
        order: {
            dataType: 'number'
        }
    },
    {
        key: 'weight',
        title: 'Peso',
        // render: (e) => e.nest.weight,
        order: {
            dataType: 'number'
        }
    },
    {
        key: 'actions',
        title: 'Ações',
        rowAlign: 'center',
        render: (e) => {
            return (
                <CustomTableOptionsMenu
                    options={
                        [
                            {
                                title: 'Teste de texto longo',
                                onClick: (e) => console.log(e),
                                to: `/pokemons/edit/${e.internal_id}`
                            }
                        ]
                    } />
            )
        }
    }
]

interface PokemonListViewState {
    filters: Array<IFilterProps>
    data: Array<TPokemonListData>
    columns: Array<ITableColumn<TPokemonListData>>
    isLoading: boolean
    error?: string
    message?: string
}

// export interface PokemonListViewProps {
//     treta?: string
// }
export default class PokemonList<Props> extends React.Component<Props, PokemonListViewState> {

    constructor(props: Props) {
        super(props)
        this.state = {
            filters: [],
            data: [],
            columns: testColumns,
            isLoading: true
        }
    }

    async componentDidMount(): Promise<void> {
        await listPokemons({ offset: 0, limit: 1000 }).then(res => {
            this.setState({
                ...this.state,
                isLoading: false,
                data: res.data?.rows ?? [],
                message: res.message ?? '',
                error: res.error ?? ''
            })
        })
    }

    componentDidUpdate(): void {
        if (this.state.message || this.state.error) {
            Toast({ message: String(this.state.message || this.state.error), severity: this.state.error ? 'error' : 'info' })
        }
    }

    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // }

    private verifyFiltersUpdate(prevFilters: Array<IFilterProps>, nextFilters: Array<IFilterProps>): boolean {
        if (prevFilters.length !== nextFilters.length) return true
        else {
            let different = false
            for (const filter of nextFilters) {
                if (prevFilters.find(elementFilter => elementFilter.columnKey === filter.columnKey && elementFilter.search !== filter.search)
                    || !prevFilters.find(elementFilter => elementFilter.columnKey === filter.columnKey)) {
                    different = true
                    break
                }
            }
            return different
        }
    }

    private verifyDataUpdate(prevData: Array<TPokemonListData>, nextData: Array<TPokemonListData>): boolean {
        if (prevData.length !== nextData.length) return true
        else {
            let different = false
            for (const data of nextData) {
                if (!prevData.find(elementData => elementData.id === data.id)) {
                    different = true
                    break
                }
            }
            return different
        }
    }

    shouldComponentUpdate(_: Readonly<Props>, nextState: Readonly<PokemonListViewState>): boolean {
        return this.state.message !== nextState.message || this.state.error !== nextState.error || this.verifyFiltersUpdate(this.state.filters, nextState.filters) || this.verifyDataUpdate(this.state.data, nextState.data)
    }

    private handleFilters(filters: Array<IFilterProps>): void {
        this.setState({
            ...this.state,
            filters
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: 'inherit' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h1>Pokemóns</h1>
                    <CustomButton style={{
                        height: '40px',
                        minWidth: '100px'
                    }} value='Criar' href='/pokemons/create' />
                </div>
                <CustomFilters
                    callBackFilters={(e) => this.handleFilters(e)}
                    filtersConfig={
                        [{
                            columnKey: 'nome',
                            filterType: 'text',
                            label: 'Nome',
                            placeholder: 'Pesquise pelo nome'
                        }]
                    }
                />
                {/* <CustomLoader open={this.state.isLoading} type='circular' backdrop={true} /> */}
                <CustomTable isLoading={this.state.isLoading} data={this.state.data} columns={this.state.columns} filters={this.state.filters} />
            </div>
        )
    }
}
