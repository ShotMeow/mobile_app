import { Container, PrimaryButton } from "../../assets/styles/generalStyles";
import {
    Actions,
    HeaderBlock,
    HeaderInner,
    Logo,
    LogoText,
    PhoneNumber,
} from "./Header.styles";

const Header = () => {
    return (
        <HeaderBlock>
            <Container>
                <HeaderInner>
                    <Logo href='#'>
                        <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.93 11.5H12.07L10 5.98L7.93 11.5ZM18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM13.95 16.5L12.81 13.5H7.17L6.05 16.5H3.96L9.07 3.5H10.93L16.04 16.5H13.95Z'
                                fill='#7780F2'
                            />
                        </svg>
                        <LogoText>MobileApp</LogoText>
                    </Logo>
                    <Actions>
                        <PhoneNumber href='tel:+79995851165'>
                            +7 (999) 585-11-65
                        </PhoneNumber>
                        <PrimaryButton>Заказать звонок</PrimaryButton>
                    </Actions>
                </HeaderInner>
            </Container>
        </HeaderBlock>
    );
};

export default Header;
