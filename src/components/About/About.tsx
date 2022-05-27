import { Container } from "../../assets/styles/generalStyles";
import {
    AboutBlock,
    AboutButton,
    AboutDescription,
    AboutHeading,
    AboutInner,
    AboutTextBlock,
} from "./About.styles";
import phone from "../../assets/images/phone.png";

const About = () => {
    return (
        <AboutBlock
            initial={{ marginTop: "200px", opacity: 0 }}
            whileInView={{ marginTop: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='about'
        >
            <Container>
                <AboutInner>
                    <AboutTextBlock>
                        <AboutHeading>
                            Разработка мобильных приложений и веб-сервисов
                        </AboutHeading>
                        <AboutDescription>
                            Увеличиваем долю рынка, улучшаем сервис, повышаем
                            лояльность и продажи, снижаем расходы за счет
                            автоматизации и оптимизации бизнес-процессов с
                            помощью мобильных приложений и веб-сервисов
                        </AboutDescription>
                        <AboutButton>Заказать проект</AboutButton>
                    </AboutTextBlock>
                    <img src={phone} alt='Картинка телефона' />
                </AboutInner>
            </Container>
        </AboutBlock>
    );
};

export default About;
