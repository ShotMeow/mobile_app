import { FC } from "react";
import { PrimaryButton, StyledInput } from "../../assets/styles/generalStyles";
import {
    Background,
    ModalBody,
    ModalForm,
    ModalHeader,
    ModalLabel,
    ModalSubtitle,
} from "./Modal.styles";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeView } from "../../store/reducers/modal.slice";


const Modal = () => {
    const title = useAppSelector(store => store.modal.title)
    const dispatch = useAppDispatch()
    return (
        <Background onClick={() => dispatch(changeView(null))}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalSubtitle>Заказать звонок</ModalSubtitle>
                    <MdClose size={24} onClick={() => dispatch(changeView(null))} cursor='pointer' />
                </ModalHeader>
                <ModalForm onSubmit={(e) => e.preventDefault()}>
                    <ModalLabel>
                        Номер телефона
                        <StyledInput type='tel' placeholder='Введите номер вашего телефона' />
                    </ModalLabel>
                    {title && <ModalLabel>
                        Название услуги
                        <StyledInput type='text' value={title} disabled />
                    </ModalLabel>}
                    <PrimaryButton>Заказать звонок</PrimaryButton>
                </ModalForm>
            </ModalBody>
        </Background>
    );
};

export default Modal;
