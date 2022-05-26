import { useState } from "react";
import {
    Container,
    Subtitle,
    TabsElement,
    TabsElementActive,
    TabsList,
    TabsOutput,
} from "../../assets/styles/generalStyles";
import { tabs } from "./Adv.data";
import { AdvBlock } from "./Adv.styles";
import { ITabs } from "../../assets/types/Tabs.types";

const Adv = () => {
    const [advs, setAdvs] = useState<ITabs[]>(tabs);

    const handleClick = (id: number) => () => {
        const current = [...advs];
        current.forEach((adv) => {
            if (adv.id === id) adv.isActive = true;
            else adv.isActive = false;
        });
        setAdvs(current);
    };

    return (
        <AdvBlock>
            <Container>
                <Subtitle>Преимущества</Subtitle>
                <TabsList>
                    {advs.map((adv) => (
                        <li key={adv.id}>
                            {adv.isActive ? (
                                <TabsElementActive>
                                    {adv.title}
                                </TabsElementActive>
                            ) : (
                                <TabsElement onClick={handleClick(adv.id)}>
                                    {adv.title}
                                </TabsElement>
                            )}
                        </li>
                    ))}
                </TabsList>
                <TabsOutput>
                    {advs.find((adv) => adv.isActive)?.description}
                </TabsOutput>
            </Container>
        </AdvBlock>
    );
};

export default Adv;
