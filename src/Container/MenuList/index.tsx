import { Cardapio } from "../../types"
import Restaurante from "../Restaurantes"
import * as S from './styles'

export type Props = {
    produtos: Cardapio[]
}

const MenuList = ({ produtos }: Props) => {
    return (
        <div className="container">
            <S.MenuList>
                {produtos.map((produtos) => (
                    <li key={produtos.id}>
                        <Restaurante  
                            id={produtos.id}
                            name={produtos.nome}
                            description={produtos.descricao}
                            image={produtos.foto}
                            portion={produtos.porcao}
                            price={produtos.preco}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList