import { FC } from "react"
import { StyledInput } from "./Input.styles"

interface IInput {
    placeholder?: string
    type: string
    pattern ?: string
    disabled?: boolean
    value?: string
}

const Input: FC<IInput> = ({placeholder, type, pattern, disabled, value}) => {
  return (
    <StyledInput type={type} placeholder={placeholder} pattern={pattern} value={value} disabled={disabled} />
  )
}

export default Input