import { Api } from "../../types"
import Product from "../Product"
import { ItensList } from "./styles"

export type Props = {
    product: Api[]
}

const ProductsList = ({ product }: Props) => {
    return (
        <div className="container">
            <ItensList>
                {product.map((product) => (
                    <li key={product.id}>
                        <Product 
                            id={product.id}
                            title={product.titulo}
                            highlighted={product.destacado}
                            description={product.descricao}
                            type={product.tipo}
                            cover={product.capa}
                            note={product.avaliacao}
                        />
                    </li>
                ))}
            </ItensList>
        </div>
    )
}

export default ProductsList