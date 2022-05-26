import styled from "styled-components";

export const Container = styled.div`
    max-width: 1235px;
    width: 95%;
    margin: auto;
`;

export const PrimaryButton = styled.button`
    background-color: #7780f2;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px #7780f2;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    padding: 8px 20px;

    &:hover {
        background-color: #606bec;
    }

    &:active {
        background-color: #4551e8;
    }
`;
