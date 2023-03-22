export interface ISearchParams {
    limit?: number,
    offset: number
}

export interface IQueryParamsObject {
    [key: string]: string
}

export interface IObjectLiteral {
    [key: string]: string | number | boolean | undefined | Date | Array<IObjectLiteral | string | number>
}

export interface IApiResponse<T> {
    data?: T
    status?: number
    error?: string
    message: string
}

export interface IListResponseContent<T> {
    count: number
    limit: number
    offset: number
    rows: Array<T>
    message?: string
}

export interface IBasicListResult {
    name: string
    url: string
}

export interface IBasicNestListResult<T> extends IBasicListResult {
    name: string
    url: string
    nest: T
}