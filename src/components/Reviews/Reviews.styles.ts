import { motion } from "framer-motion";
import styled from "styled-components";

export const ReviewsBlock = styled(motion.section)`
    padding: 50px 0px;
`;

export const ReviewHeader = styled.header`
    display: flex;
    gap: 10px;
`;

export const ReviewIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 5px;
`;

export const ReviewInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
`;

export const ReviewName = styled.h4`
    font-size: 20px;
`;

export const ReviewJob = styled.h5`
    font-size: 16px;
    font-weight: 500;
    color: #747474;
`;

export const ReviewDescription = styled.p`
    font-size: 18px;
`;

export const Slide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
