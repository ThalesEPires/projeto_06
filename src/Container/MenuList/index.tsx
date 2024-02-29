import { Api } from "../../types"
import Restaurante from "../Restaurantes"
import * as S from './styles'

export type Props = {
    produto: Api[]
}

const MenuList = ({ produto }: Props) => {
    return (
        <div className="container">
            <S.MenuList>
                {produto.map((produto) => (
                    <li key={produto.cardapio.id}>
                        <Restaurante 
                            id={produto.cardapio.id}
                            nome={produto.cardapio.nome}
                            descricao={produto.cardapio.descricao}
                            foto={produto.cardapio.foto}
                            porcao={produto.cardapio.porcao}
                            preco={produto.cardapio.preco}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList