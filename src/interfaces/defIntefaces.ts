export interface ISearchParams {
    limit?: number,
    offset?: number
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
    message?: string
}
export interface IListResponseContent<T> {
    count?: number
    next: string
    previous?: string
    result: Array<T>
}

export interface IBasicListResult {
    name: string
    url: string
}

export interface IBasicNestListResult<T> extends IBasicListResult {
    name: string
    url: string
    nest?: T
}