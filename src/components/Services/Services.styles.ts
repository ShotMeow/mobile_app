import styled from "styled-components";
import { SecondaryButton } from "../../assets/styles/generalStyles";

export const ServicesBlock = styled.section`
    padding: 50px 0px;
`;

export const ServicesInner = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    @media (max-width: 1085px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 30px;
    border-radius: 10px;

    transition: all 0.3s ease;
    &:hover {
        background-color: #7780f2;

        h3 {
            color: #fff;
        }

        p {
            color: #ededed;
        }

        button {
            border: 1px solid #fff;
            color: #fff;
        }
    }
`;

export const CardImage = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4));
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
        background-color: #fff;
        color: #7780f2 !important;
    }
    &:active {
        background-color: #f0f0f0;
    }
`;
