import React from 'react'
import CustomFilters, { IFilterProps } from '../../components/filters/CustomFilter'
import { CustomTable, ITableColumn } from '../../components/table/CustomTable'
import { Toast } from '../../components/toast/Toast'
import { toTitleCase } from '../../helpers/TextHelpers'
import { IBasicNestListResult } from '../../services/interfaces/defIntefaces'
import { IPokemon } from '../../services/interfaces/pokemonInterfaces'
import { listPokemons } from '../../services/searches/pokemon/pokemonService'

export type TPokemonListData = Omit<IPokemon, 'moves' | 'past_types' | 'game_indices'>
const testColumns: Array<ITableColumn<TPokemonListData>> = [
    {
        key: 'id',
        // render: (e) => e.nest.id,
        title: 'ID'
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
        console.log('component did update')
        if (this.state.message || this.state.error) {
            Toast({ message: String(this.state.message || this.state.error), severity: this.state.error ? 'error' : 'info' })
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('component did catch')
        console.log(error)
        console.log(errorInfo)
    }

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
        console.log('component should update')
        console.log(this.state)
        console.log(nextState)

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
