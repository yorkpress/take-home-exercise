export interface APIResponse<T> {
    data: T,
    err: string[]
}