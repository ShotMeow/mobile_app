import styled from "styled-components";

export const RadioBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const RadioElem = styled.div<{active: boolean}>`
    background-color: ${props => (props.active ? '#7780F2' : '#FFF')};
    border: ${props => (props.active ? '2px solid #7780F2' : '2px solid #4f4f4f;')};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RadioText = styled.span<{active: boolean}>`
    color: ${props => (props.active ? '#7780F2' : '#4F4F4F')};
    font-size: 22px;
`

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
`