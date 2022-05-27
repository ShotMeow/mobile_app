import { useState } from "react";
import {
    Container,
    Subtitle,
    TabsElement,
    TabsOutput,
} from "../../assets/styles/generalStyles";
import { ITabs } from "../../assets/types/Tabs.types";
import { tabs } from "./Steps.data";
import { StepsBlock, StepsList } from "./Steps.styles";

const Steps = () => {
    const [steps, setSteps] = useState<ITabs[]>(tabs);

    const handleClick = (id: number) => () => {
        const current = [...steps];
        current.forEach((step) => {
            if (step.id === id) step.isActive = true;
            else step.isActive = false;
        });
        setSteps(current);
    };

    return (
        <StepsBlock initial={{ marginTop: '200px', opacity: 0 }}
        whileInView={{ marginTop: '0px', opacity: 1 }}
        viewport={{ once: true }} id="steps">
            <Container>
                <Subtitle>Этапы разработки приложений</Subtitle>
                <StepsList>
                    {steps.map((step) => (
                        <li key={step.id}>
                                <TabsElement isActive={step.isActive} onClick={handleClick(step.id)}>
                                    {step.title}
                                </TabsElement>
                        </li>
                    ))}
                </StepsList>
                <TabsOutput>
                    {steps.find((step) => step.isActive)?.description}
                </TabsOutput>
            </Container>
        </StepsBlock>
    );
};

export default Steps;
