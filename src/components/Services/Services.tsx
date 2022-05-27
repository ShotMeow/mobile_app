import { Container, Subtitle } from "../../assets/styles/generalStyles";
import {
    ServicesBlock,
    ServicesInner,
} from "./Services.styles";

import Service from "./Service/Service";
import { services } from "./Services.data";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { IService } from "./Services.types";

const Services = () => {
    const [modal, openModal] = useState<boolean>(false)
    const [current, setCurrent] = useState<IService>()
    const showModal = (id: number) => {
        const current = services.find(service => service.id === id)
        setCurrent(current)
        openModal(!modal)
    }

    return (
        <ServicesBlock initial={{ marginTop: '200px', opacity: 0 }}
        whileInView={{ marginTop: '0px', opacity: 1 }}
        viewport={{ once: true }} id="services">
            <Container>
                <Subtitle>Наши услуги</Subtitle>
                <ServicesInner>
                    {services.map(service => <Service key={service.id} id={service.id} title={service.title} image={service.image} description={service.description} onClick={showModal}  />)}
                </ServicesInner>
            </Container>
            {modal && <Modal isShow={modal} current={current} showModal={() => openModal(!modal)} />}
        </ServicesBlock>
    );
};

export default Services;
