import { FC } from "react";
import {
    QuestionBlock,
    QuestionButton,
    QuestionDescription,
    QuestionHeader,
    QuestionTitle,
} from "./Question.styles";
import { BsPlus } from "react-icons/bs";
import { IQuestion } from "../Questions.types";

interface IQuestionComponent extends IQuestion {
    onClick: (id: number) => void;
}

const Question: FC<IQuestionComponent> = ({
    id,
    title,
    description,
    isActive,
    onClick,
}) => {
    const handleClick = () => {
        onClick(id);
    };
    const item = {
        active: { rotate: 45 },
        inactive: { rotate: 0 },
    };
    return (
        <QuestionBlock>
            <QuestionHeader onClick={handleClick}>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionButton
                    animate={isActive ? "active" : "inactive"}
                    variants={item}
                >
                    <BsPlus size={33} color='white' />
                </QuestionButton>
            </QuestionHeader>
            {isActive && (
                <QuestionDescription
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    style={{ overflow: "hidden" }}
                >
                    {description}
                </QuestionDescription>
            )}
        </QuestionBlock>
    );
};

export default Question;
