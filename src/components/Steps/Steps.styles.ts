import { motion } from "framer-motion";
import styled from "styled-components";
import { TabsList } from "../../assets/styles/generalStyles";

export const StepsBlock = styled(motion.section)`
    padding: 50px 0px;
`;

export const StepsList = styled(TabsList)`
    gap: 40px;
    flex-wrap: wrap;
`;
