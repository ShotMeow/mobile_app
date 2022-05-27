import { FC } from 'react'
import { ServicesCard, CardImage, CardSubtitle, CardDescription, CardButton } from '../Services.styles'
import { IService } from '../Services.types'

interface IServiceComponent extends IService {
    onClick: (id: number) => void
}

const Service: FC<IServiceComponent> = ({ id, title, image, description, onClick }) => {
    const handleClick = () => {
        onClick(id)
    }
    return (
        <ServicesCard>
            <CardImage src={image} />
            <CardSubtitle>{title}</CardSubtitle>
            <CardDescription>
                {description}
            </CardDescription>
            <CardButton onClick={handleClick}>Заказать звонок</CardButton>
        </ServicesCard>
    )
}

export default Service