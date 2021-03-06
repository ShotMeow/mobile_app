import { useState } from "react";
import {
    Container,
    Subtitle,
    TabsElement,
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
        <AdvBlock
            initial={{ translateY: "200px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='adv'
        >
            <Container>
                <Subtitle>Преимущества</Subtitle>
                <TabsList>
                    {advs.map((adv) => (
                        <li key={adv.id}>
                            <TabsElement
                                isActive={adv.isActive}
                                onClick={handleClick(adv.id)}
                            >
                                {adv.title}
                            </TabsElement>
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
