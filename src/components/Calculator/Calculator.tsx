import { Container } from "../../assets/styles/generalStyles";
import {
    CalculatorBlock,
    CalculatorInner,
    Form,
    FormComponent,
    Subtitle,
} from "./Calculator.styles";

const Calculator = () => {
    return (
        <CalculatorBlock>
            <Container>
                <CalculatorInner>
                    <Form>
                        <FormComponent>
                            <Subtitle>Выбери платформу</Subtitle>
                        </FormComponent>
                        <FormComponent>
                            <Subtitle>Выберите анимации - 2D/3D</Subtitle>
                        </FormComponent>
                        <FormComponent>
                            <Subtitle>Количество экранов</Subtitle>
                        </FormComponent>
                        <FormComponent>
                            <Subtitle>
                                Необходимость авторизации/регистрации
                            </Subtitle>
                        </FormComponent>
                        <FormComponent>
                            <Subtitle>Дополнительные функции</Subtitle>
                        </FormComponent>
                    </Form>
                </CalculatorInner>
            </Container>
        </CalculatorBlock>
    );
};

export default Calculator;
