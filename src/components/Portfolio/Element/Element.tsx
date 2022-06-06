import { FC } from 'react'
import { CardButton, CardDescription, CardImage, CardSubtitle, PortfolioCard } from './Element.styles'

interface IElement {
    image: string,
    title: string,
    description: string
}

const Element: FC<IElement> = ({image, title, description}) => {
    return (
        <PortfolioCard>
            <CardImage src={image} />
            <CardSubtitle>{title}</CardSubtitle>
            <CardDescription>
                {description}
            </CardDescription>
            <CardButton>Перейти</CardButton>
        </PortfolioCard>
    )
}

export default Element