import { Restaurant } from "../../Pages/Home"
import Restaurante from "../Restaurantes"
import * as S from './styles'

export type Props = {
    menu: Restaurant[]
}

const MenuList = ({ menu }: Props) => {
    return (
        <div className="container">
            <S.MenuList>
                {menu.map((menu) => (
                    <li key={menu.id}>
                        <Restaurante 
                            id={menu.info.id}
                            title={menu.info.name}
                            description={menu.info.description}
                            image={menu.info.image}
                            porcao={menu.info.porcao}
                            preco={menu.info.preco}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList