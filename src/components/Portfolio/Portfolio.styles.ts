import { motion } from "framer-motion";
import styled from "styled-components";
import { SecondaryButton } from "../../assets/styles/generalStyles";

export const PortfolioBlock = styled(motion.section)`
    padding: 50px 0px;
`;

export const PortfolioInner = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1085px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;
