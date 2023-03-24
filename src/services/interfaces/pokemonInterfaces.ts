import { IBasicNestListResult, IObjectLiteral } from "./defIntefaces"

export interface IPokemon {
    name: string
    id?: number
    internal_id?: number
    order?: number
    weight?: number
    height?: number
    base_experience?: number
    is_default?: boolean
    location_area_encounters?: string // url que vem da api
    sprites?: ISprites
    // abilities: Array<IAbilityListItem>
    // forms: IBasicNestListResult<IForms>
    // game_indices: Array<IGameIndicesListItem>
    // held_items: Array<IHeldItems>
    // moves: Array<IMoveListItem>
    // past_types: Array<IPastTypes>
    // species: IBasicNestListResult<ISpecies>
    // stats: Array<IStatListItem>
    // types: Array<ITypeListItem>
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
    back_default?: string | null
    back_female?: string | null
    back_shiny?: string | null
    back_shiny_female?: string | null
    front_default?: string | null
    front_shiny?: string | null
    front_shiny_female?: string | null
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
