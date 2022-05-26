import styled from "styled-components";
import { PrimaryButton } from "../../assets/styles/generalStyles";

export const AboutBlock = styled.section`
    padding: 50px 0px;
`;

export const AboutInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;

    @media (max-width: 850px) {
        img {
            display: none;
        }
    }
`;

export const AboutTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

export const AboutHeading = styled.h1`
    font-size: 40px;
`;

export const AboutDescription = styled.p`
    font-size: 20px;
    color: #9e9e9e;
    margin-bottom: 10px;
`;

export const AboutButton = styled(PrimaryButton)`
    font-size: 18px;
    padding: 13px 40px;
`;
