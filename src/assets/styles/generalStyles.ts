import styled from "styled-components";

export const Container = styled.div`
    max-width: 1235px;
    width: 95%;
    margin: auto;
`;

export const PrimaryButton = styled.button`
    background-color: #7780f2;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px #7780f2;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    padding: 8px 20px;
    transition: background-color 0.1s ease;

    &:hover {
        background-color: #606bec;
    }

    &:active {
        background-color: #4551e8;
    }
`;

export const SecondaryButton = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #7780f2;
    font-size: 14px;
    color: #7780f2;
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #7780f2;
`;

export const LogoText = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

export const Subtitle = styled.h2`
    font-size: 32px;
`;

export const TabsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    border-bottom: 1px solid #d1d1d1;
    margin-top: 30px;
`;

export const TabsElement = styled.button<{isActive: boolean}>`
    font-size: 14px;
    padding-bottom: 8px;
    color: ${props => props.isActive && '#7780f2'};
    border-bottom: ${props => props.isActive && '2px solid #7780f2'};
    font-weight: ${props => props.isActive && '600'};
`;

export const TabsOutput = styled.p`
    font-size: 16px;
    margin-top: 20px;
`;

export const StyledInput = styled.input`
    border-bottom: 1px solid #b4b4b4;
    padding: 10px 0px;
    font-size: 16px;
    width: 100%;

    &::placeholder {
        color: #b4b4b4;
    }
`