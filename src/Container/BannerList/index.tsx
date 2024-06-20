import { Api } from "../../types"
import Banner from "../Banner"

type Props = {
    banner: Api[]
}

const BannerList = ({ banner }: Props) => {
    return (
        <div className="container">
            {banner.map((banner) => (
                <div key={banner.id}>
                    <Banner 
                    capa={banner.capa}
                    />
                </div>
            ))}
        </div>
    )
}

export default BannerList