import styled from "styled-components";

export const HeaderBlock = styled.header`
    border-bottom: 1px solid rgba(119, 128, 242, 0.25);
    padding: 20px 0px;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 30px;
    }
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

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const PhoneNumber = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #7780f2;
`;
