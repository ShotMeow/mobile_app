import { Container, Subtitle } from "../../assets/styles/generalStyles"
import { CardButton, CardDescription, CardImage, CardSubtitle, PortfolioBlock, PortfolioCard, PortfolioInner } from "./Portfolio.styles"

import image_1 from "../../assets/images/portfolio/1.jpg";
import image_2 from "../../assets/images/portfolio/2.jpg";
import image_3 from "../../assets/images/portfolio/3.jpg";
import image_4 from "../../assets/images/portfolio/4.jpg";
import image_5 from "../../assets/images/portfolio/5.jpg";
import image_6 from "../../assets/images/portfolio/6.jpg";

const Portfolio = () => {
  return (
    <PortfolioBlock>
        <Container>
            <Subtitle>Наши услуги</Subtitle>
            <PortfolioInner>
            <PortfolioCard>
                        <CardImage src={image_1} />
                        <CardSubtitle>Газфонд</CardSubtitle>
                        <CardDescription>
                        Инструмент для отслеживания пенсионных накоплений и выплат: проектирование, дизайн, разработка приложений для iOS и Android
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
                    <PortfolioCard>
                        <CardImage src={image_2} />
                        <CardSubtitle>CRM - система AIBA</CardSubtitle>
                        <CardDescription>
                        Внутренняя система для Международной ассоциации бокса AIBA: дизайн и программирование версии для десктопа
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
                    <PortfolioCard>
                        <CardImage src={image_3} />
                        <CardSubtitle>Qube Club</CardSubtitle>
                        <CardDescription>
                        Универсальный инструмент по управлению кафе и ресторанами: веб-приложение, панель администратора, телеграм-бот и печать чеков
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
                    <PortfolioCard>
                        <CardImage src={image_4} />
                        <CardSubtitle>Ecoline</CardSubtitle>
                        <CardDescription>
                        Сервис для вывоза бытовых отходов и заботы об экологии: разработка мобильных приложений на iOS и Android
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
                    <PortfolioCard>
                        <CardImage src={image_5} />
                        <CardSubtitle>IMscored</CardSubtitle>
                        <CardDescription>
                        Платформа для персональной и профессиональной оценки личности на основе социальных и профессиональных характеристик ваших контактов.
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
                    <PortfolioCard>
                        <CardImage src={image_6} />
                        <CardSubtitle>Автодата</CardSubtitle>
                        <CardDescription>
                        Мобильное приложение для сбора данных об эксплуатации автомобиля и их продажи на бирже: приложение для iOS
                        </CardDescription>
                        <CardButton>Перейти</CardButton>
                    </PortfolioCard>
            </PortfolioInner>
        </Container>
    </PortfolioBlock>
  )
}

export default Portfolio