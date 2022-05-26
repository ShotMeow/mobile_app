import styled from "styled-components";

export const AdvBlock = styled.section`
    padding: 50px 0px;
`;

export const AdvList = styled.ul`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #d1d1d1;
    margin-top: 30px;
`;

export const AdvElement = styled.button`
    font-size: 14px;
    padding-bottom: 8px;
`;

export const AdvElementActive = styled(AdvElement)`
    color: #7780f2;
    border-bottom: 2px solid #7780f2;
    font-weight: 600;
`;

export const AdvOutput = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
`;
