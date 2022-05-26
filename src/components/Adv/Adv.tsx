import { useState } from "react";
import { Container, Subtitle } from "../../assets/styles/generalStyles";
import { tabs } from "./Adv.data";
import {
    AdvBlock,
    AdvElement,
    AdvElementActive,
    AdvList,
    AdvOutput,
} from "./Adv.styles";
import { ITabs } from "./Adv.types";

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
                <AdvList>
                    {advs.map((adv) => (
                        <li key={adv.id}>
                            {adv.isActive ? (
                                <AdvElementActive>{adv.title}</AdvElementActive>
                            ) : (
                                <AdvElement onClick={handleClick(adv.id)}>
                                    {adv.title}
                                </AdvElement>
                            )}
                        </li>
                    ))}
                </AdvList>
                <AdvOutput>
                    {advs.find((adv) => adv.isActive)?.description}
                </AdvOutput>
            </Container>
        </AdvBlock>
    );
};

export default Adv;
