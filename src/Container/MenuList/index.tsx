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
                    <li key={product.menu.itemId}>
                        <Restaurante 
                            itemId={product.menu.itemId}
                            name={product.menu.name}
                            info={product.menu.info}
                            image={product.menu.image}
                            portion={product.menu.portion}
                            price={product.menu.price}
                        />
                    </li>
                ))}
            </S.MenuList>
        </div>
    )
}

export default MenuList