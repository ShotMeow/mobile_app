import { FC } from 'react'
import { QuestionBlock, QuestionButton, QuestionDescription, QuestionHeader, QuestionTitle } from './Question.styles'
import { BsPlus } from 'react-icons/bs'
import { IQuestion } from '../Questions.types'

interface IQuestionComponent extends IQuestion {
    onClick: (id: number) => void
}

const Question: FC<IQuestionComponent> = ({ id, title, description, isActive, onClick }) => {
    const handleClick = () => {
        onClick(id)
    }
    return (
        <QuestionBlock>
            <QuestionHeader onClick={handleClick}>
                <QuestionTitle>{title}</QuestionTitle>
                <QuestionButton isActive={isActive}><BsPlus size={33} color='white' /></QuestionButton>
            </QuestionHeader>
            {isActive && <QuestionDescription>{description}</QuestionDescription>}
        </QuestionBlock>
    )
}

export default Question