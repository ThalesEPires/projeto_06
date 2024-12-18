export declare type Api = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Cardapio[]
}

export declare type Cardapio = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao?: string
    porcao?: string
}

