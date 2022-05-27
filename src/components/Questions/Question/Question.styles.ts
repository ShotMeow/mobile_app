import styled from "styled-components";

export const QuestionBlock = styled.article`
    padding: 20px 0px;
    border-bottom: 1px solid #b5b5b5;
`;

export const QuestionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const QuestionTitle = styled.h3`
    font-size: 26px;
`;

export const QuestionDescription = styled.p`
    color: #454545;
    font-size: 16px;
    margin-top: 20px;
`;

export const QuestionButton = styled.button<{ isActive: boolean }>`
    background-color: #7780f2;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        transform: rotate(${(props) => props.isActive && "45"}deg);
    }
`;
