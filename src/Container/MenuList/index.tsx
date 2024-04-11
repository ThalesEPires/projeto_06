import { Api } from "../../types"
import Restaurante from "../Restaurantes"
import * as S from './styles'

type Props = {
    produtos: Api[]
}

const MenuList = ({ produtos }: Props) => {
    return (
        <div className="container">
            <S.MenuList>
                {produtos.map((produtos) => (
                    <li key={produtos.cardapio.id}>
                        <Restaurante  
                            id={produtos.cardapio.id}
                            name={produtos.cardapio.nome}
                            description={produtos.cardapio.descricao}
                            image={produtos.cardapio.foto}
                            portion={produtos.cardapio.porcao}
                            price={produtos.cardapio.preco}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList