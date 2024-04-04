import { Button, Card, Descricao, Image, Notas, Tag, Title } from "./styles"

import estrela from "../../../public/images/estrela.png"

type Props = {
    id: number
    title: string
    highlighted: boolean;
    type: string;
    note: number;
    description: string;
    cover: string;
}

const Product = ({ id, title, highlighted, type, note, description, cover }: Props) => {
    
    return (
        <Card
        key={id}
        title={`Clique aqui para saber mais detalhes do restaurante: ${title}`}
        to={`restaurante/${id}`}
        >
            <Image src={cover} alt={title} />
            <Tag className="destaque">{highlighted === true && 'Destaque do dia'}</Tag>
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