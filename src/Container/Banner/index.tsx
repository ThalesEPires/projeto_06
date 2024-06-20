type Props = {
    capa: string
}

const Banner = ({ capa }: Props) => {
    return (
        <div>
            <img src={capa} alt="" />
        </div>
    )
}

export default Banner