export interface IClientRequest{
    name : string
    email : string
    fone : string
    createdAt? : string
}

export interface IClientUpdate{
    name? : string
    email? : string
    fone? : string
}