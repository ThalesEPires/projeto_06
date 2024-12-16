import { Button, Card, Descricao, Destaque, Image, Notas, Tag, Title } from "./styles"

import estrela from "../Images/images/estrela.png"

type Props = {
    id: number
    titulo: string
    destacado?: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
}

const Product = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa }: Props) => {
    return (
        <Card
        key={id} 
        title={`Clique aqui para saber mais detalhes do restaurante: ${titulo}`}
        to={`/restaurantes/${id}`}
        >
            <Image src={capa} alt={titulo} />
            {destacado === true && (
                <Destaque>{destacado === true && 'Destaque do dia'}</Destaque>
            )}
            <Tag>{tipo}</Tag>
            <div>
                <Title>{titulo}
                    <Notas>
                        {avaliacao}
                        <img src={estrela} />
                    </Notas>
                </Title>
            </div>
            <Descricao>{descricao}</Descricao>
            <Button>Saiba mais</Button>
        </Card>
    )
}

export default Product