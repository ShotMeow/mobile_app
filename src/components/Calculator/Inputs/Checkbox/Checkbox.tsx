import { FC } from 'react'
import { CheckboxBlock, CheckboxElem, CheckboxText } from './Checkbox.styles'
import {BiCheck} from 'react-icons/bi'

interface ICheckbox {
    id: number;
    active: boolean;
    children: string;
    onClick: (id: number) => void;
}

const Checkbox: FC<ICheckbox> = ({id, active, children, onClick}) => {
    const handleClick = () => {
        onClick(id)
    }
  return (
    <CheckboxBlock onClick={handleClick}><CheckboxElem active={active}>{active && <BiCheck color='white' size={18} />}</CheckboxElem><CheckboxText active={active}>{children}</CheckboxText></CheckboxBlock>
  )
}

export default Checkbox