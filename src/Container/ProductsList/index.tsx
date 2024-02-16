import { Restaurant } from "../../Pages/Home"
import Product from "../Product"
import { ItensList } from "./styles"


export type Props = {
    restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => {
    return (
        <div className="container">
            <ItensList>
                {restaurant.map((product) => (
                    <li key={product.id}>
                        <Product 
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            image={product.cover}
                            note={product.note}
                        />
                    </li>
                ))}
            </ItensList>
        </div>
    )
}

export default ProductsList