import { useNavigate } from "react-router-dom"

import { Button, Card, Descricao, Image, Notas, Title } from "./styles"

import estrela from "../../../images/estrela.png"
import Tag from "../Tag"

export type Props = {
    product: Product
}

const Product = ({ product }: Props) => {
    const navigate = useNavigate()

    const goToRestaurant = () => {
        navigate('/restaurante')
    }
    
    return (
        <Card
        key={product.id}
        title={`Clique aqui para saber mais detalhes do restaurante: ${product.title}`}
        onClick={goToRestaurant}
        >
            <Image src={product.cover} alt={product.title} />
            <Tag>{product.highlighted}</Tag>
            <Tag>{product.type}</Tag>
            <div>
                <Title>{product.title}
                    <Notas>
                        {product.note}
                        <img src={estrela} />
                    </Notas>
                </Title>
            </div>
            <Descricao>{product.description}</Descricao>
            <Button>Saiba mais</Button>
        </Card>
    )
}

export default Product