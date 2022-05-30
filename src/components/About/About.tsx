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
import { useAppDispatch } from "../../store/hooks";
import { changeView } from "../../store/reducers/modal.slice";

const About = () => {
    const dispatch = useAppDispatch()
    return (
        <AboutBlock
            initial={{ translateY: "200px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
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
                        <AboutButton onClick={() => dispatch(changeView(null))}>Заказать проект</AboutButton>
                    </AboutTextBlock>
                    <img src={phone} alt='Картинка телефона' />
                </AboutInner>
            </Container>
        </AboutBlock>
    );
};

export default About;
