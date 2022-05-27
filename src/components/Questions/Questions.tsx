import React, { useState } from "react";
import { Container, Subtitle } from "../../assets/styles/generalStyles";
import Question from "./Question/Question";
import { questionsData } from "./Questions.data";
import { QuestionsBlock, QuestionsInner } from "./Questions.styles";
import { IQuestion } from "./Questions.types";

const Questions = () => {
    const [questions, setQuestions] = useState<IQuestion[]>(questionsData);

    const changeQuestions = (id: number) => {
        const data = [...questions];
        data.forEach((question) => {
            if (question.id === id) question.isActive = true;
            else question.isActive = false;
        });
        setQuestions(data);
    };
    return (
        <QuestionsBlock
            initial={{ marginTop: "200px", opacity: 0 }}
            whileInView={{ marginTop: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='questions'
        >
            <Container>
                <Subtitle>Ответы на часто задаваемые вопросы</Subtitle>
                <QuestionsInner>
                    {questions.map((question) => (
                        <Question
                            key={question.id}
                            id={question.id}
                            title={question.title}
                            description={question.description}
                            isActive={question.isActive}
                            onClick={changeQuestions}
                        />
                    ))}
                </QuestionsInner>
            </Container>
        </QuestionsBlock>
    );
};

export default Questions;
