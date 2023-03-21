import { IBasicNestListResult, IObjectLiteral } from "./defIntefaces"

export interface IPokemon {
    abilities: Array<IAbilityListItem>
    base_experience: number
    forms: IBasicNestListResult<IForms>
    game_indices: Array<IGameIndicesListItem>
    height: number
    held_items: Array<IHeldItems>
    id: number
    is_default: boolean
    location_area_encounters: string // url que vem da api
    moves: Array<IMoveListItem>
    name: string
    order: number
    past_types: Array<IPastTypes>
    species: IBasicNestListResult<ISpecies>
    sprites: ISprites
    stats: Array<IStatListItem>
    types: Array<ITypeListItem>
    weight: number
}

interface IAbilityListItem {
    ability: IBasicNestListResult<IAbility>
    is_hidden: boolean
    slot: number
}

interface IAbility extends IObjectLiteral { }

interface IForms extends IObjectLiteral { }

interface IGameIndicesListItem {
    game_index: number
    version: IBasicNestListResult<IGameIndices>
}

interface IGameIndices extends IObjectLiteral { }

interface IHeldItems extends IObjectLiteral { }

interface IMoveListItem {
    move: IBasicNestListResult<IMove>
    version_group_details: Array<{
        level_learned_at: number,
        move_learn_method: IBasicNestListResult<undefined>
        version_group: IBasicNestListResult<undefined>
    }>
}

interface IMove extends IObjectLiteral { }

interface IPastTypes extends IObjectLiteral { }

interface ISpecies extends IObjectLiteral { }

export interface ISprites {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: IObjectLiteral
    versions: IObjectLiteral
}

interface IStatListItem {
    base_stat: number
    effort: number
    stat: IBasicNestListResult<IStat>
}
interface IStat extends IObjectLiteral { }

interface ITypeListItem {
    slot: number
    type: IBasicNestListResult<IType>
}

interface IType extends IObjectLiteral { }
