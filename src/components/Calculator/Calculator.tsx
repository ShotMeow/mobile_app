import { useEffect, useState } from "react";
import { Container, Subtitle } from "../../assets/styles/generalStyles";
import { animsData, authData, extrasData, platformData } from "./Calculator.data";
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
import Input from "./Inputs/Input/Input";
import Radio from "./Inputs/Radio/Radio";

const Calculator = () => {
    const [platforms, setPlatforms] = useState<ICheckbox[]>(platformData)
    const [auth, setAuth] = useState<ICheckbox[]>(authData)
    const [anims, setAnims] = useState<ICheckbox[]>(animsData)
    const [extras, setExtras] = useState<ICheckbox[]>(extrasData)

    const [result, setResult] = useState<number>(0)
    const [days, setDays] = useState<number>(0)

    const changePlatforms = (id: number) => {
        const data = [...platforms]
        data.forEach(platform => {
            if (platform.id === id)
                platform.isActive = !platform.isActive
        })
        setPlatforms(data)
    }

    const changeAuth = (id: number) => {
        const data = [...auth]
        data.forEach(platform => {
            if (platform.id === id)
                platform.isActive = !platform.isActive
        })
        setAuth(data)
    }

    const changeExtras = (id: number) => {
        const data = [...extras]
        data.forEach(platform => {
            if (platform.id === id)
                platform.isActive = !platform.isActive
        })
        setExtras(data)
    }

    const changeAnims = (id: number) => {
        const data = [...anims]
        data.forEach(platform => {
            if (platform.id === id)
                platform.isActive = true
            else
                platform.isActive = false
        })
        setAnims(data)
    }
    

    return (
        <CalculatorBlock id="calculator">
            <Container>
                <Subtitle>Калькулятор расчета примерной стоимости работ</Subtitle>
                <CalculatorInner>
                    <Form>
                        <FormComponent>
                            <CalcSubtitle>Выбери платформу</CalcSubtitle>
                            {platforms.map(platform => <Checkbox key={platform.id} id={platform.id} onClick={changePlatforms} active={platform.isActive}>{platform.title}</Checkbox>)}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>Выберите анимации - 2D/3D</CalcSubtitle>
                            {anims.map(anim => <Radio key={anim.id} id={anim.id} onClick={changeAnims} active={anim.isActive}>{anim.title}</Radio>)}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>Количество экранов</CalcSubtitle>
                            <Input></Input>
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>
                                Необходимость авторизации/регистрации
                            </CalcSubtitle>
                            {auth.map(auth => <Checkbox key={auth.id} id={auth.id} onClick={changeAuth} active={auth.isActive}>{auth.title}</Checkbox>)}
                        </FormComponent>
                        <FormComponent>
                            <CalcSubtitle>Дополнительные функции</CalcSubtitle>
                            {extras.map(extra => <Checkbox key={extra.id} id={extra.id} onClick={changeExtras} active={extra.isActive}>{extra.title}</Checkbox>)}
                        </FormComponent>
                    </Form>
                    <ResultBlock>Итого: <Result>{result} ₽</Result> <Time>≈ {days} дней</Time></ResultBlock>
                    <CalcButton>Заказать проект</CalcButton>
                </CalculatorInner>
            </Container>
        </CalculatorBlock>
    );
};

export default Calculator;
