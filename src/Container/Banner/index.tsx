import { BannerContainer, BannerImg, Name, Tipo } from "./styles"

type Props = {
    capa: string
    type: string
    name: string
}

const Banner = ({ capa, type, name }: Props) => {
    return (
        <BannerContainer>
            <BannerImg src={capa} alt={name} />
            <Tipo>{type}</Tipo>
            <Name>{name}</Name>
        </BannerContainer>
    )
}

export default Banner