import styled from "styled-components";
import { PrimaryButton } from "../../assets/styles/generalStyles";

export const CalculatorBlock = styled.section`
    padding: 50px 0px;
`;

export const CalculatorInner = styled.div`
    margin-top: 30px;
`;

export const CalcSubtitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &:nth-child(5) {
        grid-column-start: 3;
        grid-column-end: 3;
    }

    @media (max-width: 980px) {
        &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 1;
    }

    &:nth-child(5) {
        grid-column-start: 2;
        grid-column-end: 3;
    }
    }

    @media (max-width: 980px) {
        &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 1;
    }

    &:nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 1;
    }
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    @media (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const ResultBlock = styled.p`
    font-size: 24px;
    color: #464646;
    margin: 40px 0px;
`

export const Result = styled.span`
    font-weight: 700;
    color: #7780F2;
`

export const Time = styled.span`
font-weight: 700;
`

export const CalcButton = styled(PrimaryButton)`
    font-size: 18px;
    padding: 10px 30px;
`