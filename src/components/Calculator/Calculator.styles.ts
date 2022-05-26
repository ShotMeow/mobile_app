import styled from "styled-components";

export const CalculatorBlock = styled.section`
    padding: 50px 0px;
`;

export const CalculatorInner = styled.div``;

export const Subtitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &:nth-child(5) {
        grid-column-start: 3;
        grid-column-end: 3;
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
`;
