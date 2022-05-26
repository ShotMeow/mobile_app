import { Container, Subtitle } from "../../assets/styles/generalStyles";
import {
    CardButton,
    CardDescription,
    CardImage,
    CardSubtitle,
    ServicesBlock,
    ServicesCard,
    ServicesInner,
} from "./Services.styles";

import image_1 from "../../assets/images/services/1.png";
import image_2 from "../../assets/images/services/2.png";
import image_3 from "../../assets/images/services/3.png";
import image_4 from "../../assets/images/services/4.png";
import image_5 from "../../assets/images/services/5.png";
import image_6 from "../../assets/images/services/6.png";

const Services = () => {
    return (
        <ServicesBlock>
            <Container>
                <Subtitle>Наши услуги</Subtitle>
                <ServicesInner>
                    <ServicesCard>
                        <CardImage src={image_1} />
                        <CardSubtitle>Аналитика</CardSubtitle>
                        <CardDescription>
                            Проводим конкурентный анализ рынка, используем
                            лучшие решения для создания первоклассных продуктов.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                    <ServicesCard>
                        <CardImage src={image_2} />
                        <CardSubtitle>Проектирование</CardSubtitle>
                        <CardDescription>
                            Реализуем бизнес-задачи с помощью дружественных
                            пользователю интерфейсов на базе аналитики.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                    <ServicesCard>
                        <CardImage src={image_3} />
                        <CardSubtitle>Дизайн</CardSubtitle>
                        <CardDescription>
                            Создаем лучший пользовательский опыт. Рисуем удобные
                            и понятные интерфейсы, которые работают.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                    <ServicesCard>
                        <CardImage src={image_4} />
                        <CardSubtitle>Разработка</CardSubtitle>
                        <CardDescription>
                            Воплощаем приложение в коде. Пишем чистый и
                            стабильный код, интегрируем его с технологиями
                            заказчика.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                    <ServicesCard>
                        <CardImage src={image_5} />
                        <CardSubtitle>Тестирование</CardSubtitle>
                        <CardDescription>
                            Тестируем сервис на разных устройствах и гарантируем
                            выпуск качественного продукта точно в срок.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                    <ServicesCard>
                        <CardImage src={image_6} />
                        <CardSubtitle>Продвижение</CardSubtitle>
                        <CardDescription>
                            Поддерживаем и улучшаем продукт на основе обратной
                            связи. Тысячи скачиваний и вывод в топы сторов.
                        </CardDescription>
                        <CardButton>Заказать звонок</CardButton>
                    </ServicesCard>
                </ServicesInner>
            </Container>
        </ServicesBlock>
    );
};

export default Services;
