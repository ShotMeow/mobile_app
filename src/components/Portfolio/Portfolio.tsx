import { Container, Subtitle } from "../../assets/styles/generalStyles";
import { PortfolioBlock, PortfolioInner } from "./Portfolio.styles";

import { elements } from "./Portfolio.data";
import Element from "./Element/Element";

const Portfolio = () => {
    return (
        <PortfolioBlock
            initial={{ translateY: "200px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='portfolio'
        >
            <Container>
                <Subtitle>Портфолио</Subtitle>
                <PortfolioInner>
                    {elements.map((element) => (
                        <Element
                            key={element.id}
                            image={element.image}
                            title={element.title}
                            description={element.description}
                        />
                    ))}
                </PortfolioInner>
            </Container>
        </PortfolioBlock>
    );
};

export default Portfolio;
