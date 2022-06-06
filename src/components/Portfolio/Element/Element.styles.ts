import styled from "styled-components";
import { SecondaryButton } from "../../../assets/styles/generalStyles";

export const PortfolioCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-radius: 10px;

    transition: all 0.3s ease;
`;

export const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
`;

export const CardSubtitle = styled.h3`
    font-size: 24px;
    align-self: flex-start;
`;

export const CardDescription = styled.p`
    font-size: 16px;
    color: #464f60;
`;

export const CardButton = styled(SecondaryButton)`
    margin-top: 10px;
    transition: all 0.1s ease;
    align-self: stretch;
    &:hover {
        background-color: #7780f2;
        color: #fff;
    }
    &:active {
        background-color: #4551e8;
    }
`;