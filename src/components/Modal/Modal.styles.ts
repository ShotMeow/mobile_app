import styled from "styled-components";
import { Subtitle } from "../../assets/styles/generalStyles";

export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const ModalBody = styled.div`
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    width: 500px;

    @media (max-width: 550px) {
        width: 95%;
    }
`;

export const ModalSubtitle = styled(Subtitle)`
    font-size: 24px;
`;

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const ModalExit = styled.button``;

export const ModalLabel = styled.label`
    font-size: 16px;
    color: #464f60;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
