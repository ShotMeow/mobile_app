import { motion } from "framer-motion";
import { exit } from "process";
import { FC } from "react";
import { Circle, RadioBlock, RadioElem, RadioText } from "./Radio.styles";

interface ICheckbox {
    id: number;
    active: boolean;
    children: string;
    onClick: (id: number) => void;
}

const Radio: FC<ICheckbox> = ({ id, active, children, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };
    return (
        <RadioBlock onClick={handleClick}>
            <RadioElem active={active}>
                {active && (
                    <Circle initial={{ scale: 0 }} animate={{ scale: 1 }} />
                )}
            </RadioElem>
            <RadioText active={active}>{children}</RadioText>
        </RadioBlock>
    );
};

export default Radio;
