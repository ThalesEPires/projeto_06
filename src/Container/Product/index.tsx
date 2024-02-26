import { useNavigate } from "react-router-dom"

import { Button, Card, Descricao, Image, Notas, Title } from "./styles"

import estrela from "../../../images/estrela.png"
import Tag from "../Tag"

type Props = {
    id: number
    title: string
    highlighted: string;
    type: string;
    note: number;
    description: string;
    cover: string;
}

const Product = ({ id, title, highlighted, type, note, description, cover }: Props) => {
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
            <Image src={cover} alt={title} />
            <Tag>{highlighted}</Tag>
            <Tag>{type}</Tag>
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