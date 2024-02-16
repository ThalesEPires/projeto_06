import { useNavigate } from "react-router-dom"

import { Button, Card, Descricao, Image, Notas, Title } from "./styles"

import estrela from "../../../images/estrela.png"

type Props = {
    title: string
    image: string
    note: string
    description: string
    id: number
}

const Product = ({ title, image, description, note, id }: Props) => {
    const navigate = useNavigate()

    const goToRestaurant = () => {
        navigate('/restaurante')
    }
    
    return (
        <Card
        key={id}
        title={`Clique aqui para saber mais detalhes do restaurante: ${title}`}
        onClick={goToRestaurant}
        >
            <Image src={image} alt={title} />
            <div>
                <Title>{title}
                    <Notas>
                        {note}
                        <img src={estrela} />
                    </Notas>
                </Title>
            </div>
            <Descricao>{description}</Descricao>
            <Button>Saiba mais</Button>
        </Card>
    )
}

export default Product