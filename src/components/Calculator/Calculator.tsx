import {  ChangeEvent, useState } from "react";
import { Container, StyledInput, Subtitle } from "../../assets/styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { authCalc, calcResult, extraCalc, platformCalc, animsCalc, screensCalc } from "../../store/reducers/calculator.slice";
import { changeView } from "../../store/reducers/modal.slice";
import {
    animsData,
    authData,
    extrasData,
    platformData,
} from "./Calculator.data";
import {
    CalculatorBlock,
    CalculatorInner,
    Form,
    FormComponent,
    CalcSubtitle,
    ResultBlock,
    Result,
    Time,
    CalcButton,
} from "./Calculator.styles";
import { ICheckbox } from "./Calculator.types";
import Checkbox from "./Inputs/Checkbox/Checkbox";
import Radio from "./Inputs/Radio/Radio";

const Calculator = () => {
    const [platforms, setPlatforms] = useState<ICheckbox[]>(platformData);
    const [auth, setAuth] = useState<ICheckbox[]>(authData);
    const [anims, setAnims] = useState<ICheckbox[]>(animsData);
    const [extras, setExtras] = useState<ICheckbox[]>(extrasData);

    const calculatorData = useAppSelector(store => store.calculator)
    const dispatch = useAppDispatch()

    const changePlatforms = (id: number) => {
        const data = [...platforms];
        data.forEach((platform) => {
            if (platform.id === id) platform.isActive = !platform.isActive;
        });
        dispatch(platformCalc(data.filter(platform => platform.isActive).length));
        dispatch(calcResult())
        setPlatforms(data);
    };

    const changeAuth = (id: number) => {
        const data = [...auth];
        data.forEach((auth) => {
            if (auth.id === id) auth.isActive = !auth.isActive;
        });
        dispatch(authCalc(data.filter(auth => auth.isActive).length));
        dispatch(calcResult())
        setAuth(data);
    };

    const changeExtras = (id: number) => {
        const data = [...extras];
        data.forEach((extra) => {
            if (extra.id === id) extra.isActive = !extra.isActive;
        });
        dispatch(extraCalc(data.filter(extra => extra.isActive).length));
        dispatch(calcResult())
        setExtras(data);
    };

    const changeAnims = (id: number) => {
        const data = [...anims];
        data.forEach((anim) => {
            if (anim.id === id) anim.isActive = true;
            else anim.isActive = false;
        });
        dispatch(animsCalc(id === 1 ? 1 : 2));
        dispatch(calcResult())
        setAnims(data);
    };

    const changeScreens = (count: number) => {
        dispatch(screensCalc(count));
        dispatch(calcResult())
    }
    return (
        <CalculatorBlock
            initial={{ translateX: "-200px", opacity: 0 }}
            whileInView={{ translateX: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='calculator'
        >
            <Container>
                <Subtitle>
                    Калькулятор расчета примерной стоимости работ
                </Subtitle>
                <CalculatorInner>
                    <Form>
                        <FormComponent>
                            <CalcSubtitle>Выбери платформу</CalcSubtitle>
                            {platforms.map((platform) => (
                                <Checkbox
                                    key={platform.id}
                                    id={platform.id}
                                    onClick={changePlatforms}
                                    active={platform.isActive}
                                >
                                    {platform.title}
                                </Checkbox>
                            ))}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>
                                Выберите анимации - 2D/3D
                            </CalcSubtitle>
                            {anims.map((anim) => (
                                <Radio
                                    key={anim.id}
                                    id={anim.id}
                                    onClick={changeAnims}
                                    active={anim.isActive}
                                >
                                    {anim.title}
                                </Radio>
                            ))}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>Количество экранов</CalcSubtitle>
                            <StyledInput onChange={(e: ChangeEvent<HTMLInputElement>) => changeScreens(Number(e.target.value))} type='number' placeholder='Введите количество экранов' />
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>
                                Необходимость авторизации/регистрации
                            </CalcSubtitle>
                            {auth.map((auth) => (
                                <Checkbox
                                    key={auth.id}
                                    id={auth.id}
                                    onClick={changeAuth}
                                    active={auth.isActive}
                                >
                                    {auth.title}
                                </Checkbox>
                            ))}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>Дополнительные функции</CalcSubtitle>
                            {extras.map((extra) => (
                                <Checkbox
                                    key={extra.id}
                                    id={extra.id}
                                    onClick={changeExtras}
                                    active={extra.isActive}
                                >
                                    {extra.title}
                                </Checkbox>
                            ))}
                        </FormComponent>
                    </Form>
                    <ResultBlock>
                        Итого: <Result>{calculatorData.result} ₽</Result>{" "}
                        <Time>≈ {calculatorData.days} дней</Time>
                    </ResultBlock>
                    <CalcButton onClick={() => dispatch(changeView(null))}>Заказать проект</CalcButton>
                </CalculatorInner>
            </Container>
        </CalculatorBlock>
    );
};

export default Calculator;
