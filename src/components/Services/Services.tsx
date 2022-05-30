import { Container, Subtitle } from "../../assets/styles/generalStyles";
import { ServicesBlock, ServicesInner } from "./Services.styles";

import Service from "./Service/Service";
import { services } from "./Services.data";
import { changeView } from "../../store/reducers/modal.slice";
import { useAppDispatch } from "../../store/hooks";

const Services = () => {
    const dispatch = useAppDispatch()

    return (
        <ServicesBlock
            initial={{ translateY: "200px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            id='services'
        >
            <Container>
                <Subtitle>Наши услуги</Subtitle>
                <ServicesInner>
                    {services.map((service) => (
                        <Service
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                            onClick={() => dispatch(changeView(services.find((service_element) => service_element.id === service.id)?.title))}
                        />
                    ))}
                </ServicesInner>
            </Container>
        </ServicesBlock>
    );
};

export default Services;
