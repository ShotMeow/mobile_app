import { FC } from "react"
import { PrimaryButton } from "../../../assets/styles/generalStyles"
import Input from "../../Calculator/Inputs/Input/Input"
import { IService } from "../Services.types"
import { Background, ModalBody, ModalForm, ModalHeader, ModalLabel, ModalSubtitle } from "./Modal.styles"
import {MdClose} from 'react-icons/md'
interface IModal {
    current: IService  | undefined
    isShow: boolean
    showModal: () => void
}

const Modal: FC<IModal> = ({isShow, current, showModal}) => {
    const handleClick = () => {
        showModal()
    }

  return (
    <Background onClick={handleClick}>
        <ModalBody onClick={e => e.stopPropagation()}>
            <ModalHeader>
                <ModalSubtitle>Заказать звонок</ModalSubtitle>
                <MdClose size={24} onClick={handleClick} cursor='pointer' />
            </ModalHeader>
            <ModalForm onSubmit={e => e.preventDefault()}>
                <ModalLabel>   
                    Номер телефона
                    <Input type="tel" placeholder="Введите номер вашего телефона" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" />
                </ModalLabel>
                <ModalLabel>
                    Название услуги
                    <Input type="text" value={current?.title} disabled={true} />
                </ModalLabel>
                <PrimaryButton>Заказать звонок</PrimaryButton>
            </ModalForm>
        </ModalBody>
    </Background>
  )
}

export default Modal