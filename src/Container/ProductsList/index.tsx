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
                            titulo={product.titulo}
                            destacado={product.destacado}
                            descricao={product.descricao}
                            tipo={product.tipo}
                            capa={product.capa}
                            avaliacao={product.avaliacao}
                        />
                    </li>
                ))}
            </ItensList>
        </div>
    )
}
export default ProductsList