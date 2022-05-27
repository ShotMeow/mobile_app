import styled from "styled-components";

export const CheckboxBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const CheckboxElem = styled.div<{active: boolean}>`
    background-color: ${props => (props.active ? '#7780F2' : '#FFF')};
    border: ${props => (props.active ? '2px solid #7780F2' : '2px solid #4f4f4f;')};
    width: 22px;
    height: 22px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CheckboxText = styled.span<{active: boolean}>`
    color: ${props => (props.active ? '#7780F2' : '#4F4F4F')};
    font-size: 22px;
`