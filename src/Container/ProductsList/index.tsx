import Product from "../Product"
import { ItensList } from "./styles"

export type Props = {
    product: Product[]
}

const ProductsList = ({ product }: Props) => {
    return (
        <div className="container">
            <ItensList>
                {product.map((product) => (
                    <li key={product.id}>
                        <Product 
                            id={product.id}
                            title={product.title}
                            highlighted={product.highlighted}
                            description={product.description}
                            type={product.type}
                            cover={product.cover}
                            note={product.note}
                        />
                    </li>
                ))}
            </ItensList>
        </div>
    )
}

export default ProductsList