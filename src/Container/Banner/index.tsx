import { BannerCont } from "./styles"

type Props = {
    capa: string
}

const Banner = ({ capa }: Props) => {
    return (
        <div>
            <BannerCont src={capa} alt="" />
        </div>
    )
}

export default Banner