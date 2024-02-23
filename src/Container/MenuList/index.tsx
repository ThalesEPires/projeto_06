import Restaurante from "../Restaurantes"
import * as S from './styles'

type Props = {
    product: Product[]
}

const MenuList = ({ product }: Props) => {
    return (
        <div className="container">
            <S.MenuList>
                {product.map((product) => (
                    <li key={product.id}>
                        <Restaurante 
                            id={product.menu.id}
                            title={product.menu.name}
                            info={product.menu.info}
                            image={product.menu.image}
                            porcao={product.menu.portion}
                            price={product.menu.price}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList