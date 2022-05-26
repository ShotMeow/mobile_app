import styled from "styled-components";

export const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 0px;

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ListLink = styled.a`
    color: #181818;
    transition: color 0.1s ease;
    &:hover {
        color: #7780f2;
    }
`;

export const SocialBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Social = styled.a`
    svg {
        fill: #181818;
        transition: fill 0.1s ease;
        &:hover {
            fill: #7780f2;
        }
    }
`;

export const Arrow = styled.button`
    svg {
        fill: #181818;
        transition: fill 0.1s ease;
        &:hover {
            fill: #7780f2;
        }
    }
`;
