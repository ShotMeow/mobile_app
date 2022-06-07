import { FC } from "react";
import { CheckboxBlock, CheckboxElem, CheckboxText } from "./Checkbox.styles";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

interface ICheckbox {
    id: number;
    active: boolean;
    children: string;
    onClick: (id: number) => void;
}

const Checkbox: FC<ICheckbox> = ({ id, active, children, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };
    return (
        <CheckboxBlock onClick={handleClick}>
            <CheckboxElem active={active}>
                {active && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <BiCheck color='white' size={20} />
                    </motion.div>
                )}
            </CheckboxElem>
            <CheckboxText active={active}>{children}</CheckboxText>
        </CheckboxBlock>
    );
};

export default Checkbox;
