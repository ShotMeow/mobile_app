import { PrimaryButton, StyledInput } from "../../assets/styles/generalStyles";
import {
    Background,
    ErrorMessage,
    ModalBody,
    ModalForm,
    ModalHeader,
    ModalLabel,
    ModalSubtitle,
    PhoneInput,
} from "./Modal.styles";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeView } from "../../store/reducers/modal.slice";
import { useForm } from "react-hook-form";
import { createDefaultMaskGenerator } from "react-hook-mask";
import { useState } from "react";


const Modal = () => {
    const [value, setValue] = useState('');
    const title = useAppSelector(store => store.modal.title)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            phone: '',
            service: title
        }
    })
    const maskGenerator = createDefaultMaskGenerator('+7 999 999 99-99')
    const onSubmit = (data: any) => console.log(data)
    return (
        <Background onClick={() => dispatch(changeView(null))}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalSubtitle>Заказать звонок</ModalSubtitle>
                    <MdClose size={24} onClick={() => dispatch(changeView(null))} cursor='pointer' />
                </ModalHeader>
                <ModalForm onSubmit={handleSubmit(onSubmit)}>
                    <ModalLabel>
                        Номер телефона
                        <PhoneInput maskGenerator={maskGenerator} value={value} {...register('phone', {required: true, pattern: /^[+]7\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}-[0-9]{2}$/i})} onChange={setValue} type='tel' placeholder='+7 999 999 99-99' />
                        {errors.phone && <ErrorMessage>Введите номер вашего телефона</ErrorMessage>}
                    </ModalLabel>
                    {title && <ModalLabel>
                        Название услуги
                        <StyledInput {...register('service')} type='text' value={title} disabled />
                    </ModalLabel>}
                    <PrimaryButton>Заказать звонок</PrimaryButton>
                </ModalForm>
            </ModalBody>
        </Background>
    );
};

export default Modal;
