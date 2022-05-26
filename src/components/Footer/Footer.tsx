import { Container, Logo, LogoText } from "../../assets/styles/generalStyles";
import {
    Arrow,
    FooterInner,
    List,
    ListLink,
    Nav,
    Social,
    SocialBlock,
} from "./Footer.styles";

const Footer = () => {
    return (
        <footer>
            <Container>
                <FooterInner>
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
                    <Nav>
                        <List>
                            <li>
                                <ListLink href='#'>О нас</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>Услуги</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>Этапы разработки</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>Портфолио</ListLink>
                            </li>
                        </List>
                        <List>
                            <li>
                                <ListLink href='#'>Наши преимущества</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>Отзывы</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>Калькулятор</ListLink>
                            </li>
                            <li>
                                <ListLink href='#'>
                                    Ответы на часто задаваемые вопросы
                                </ListLink>
                            </li>
                        </List>
                    </Nav>
                    <SocialBlock>
                        <Social href='#'>
                            <svg
                                width='25'
                                height='15'
                                viewBox='0 0 25 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M24.2606 13.4636C23.2645 11.7947 20.6983 9.78928 19.639 8.91662C19.349 8.67768 19.318 8.26431 19.5819 8.00009C21.6036 5.97763 23.2207 3.6538 23.7772 2.24959C24.0228 1.62928 23.5145 0.973883 22.7982 0.973883H20.7177C20.032 0.973883 19.6306 1.20301 19.4394 1.56787C17.7591 4.77314 16.3178 6.16032 15.3088 6.97106C14.744 7.42519 13.8631 7.04898 13.8631 6.35797C13.8631 5.02653 13.8631 3.30546 13.8631 2.08497C13.8631 1.49304 13.3431 1.01414 12.7017 1.01414L8.901 0.973883C8.42259 0.973883 8.14929 1.47808 8.43645 1.83158L9.06399 2.67018C9.30014 2.96073 9.42765 3.31423 9.42765 3.67702L9.42432 7.45358C9.42432 8.11052 8.56894 8.43152 8.06115 7.97119C6.34319 6.41371 4.85252 3.23321 4.3159 1.71237C4.16068 1.27217 3.71774 0.974915 3.21549 0.973883L1.16603 0.969238C0.39713 0.969238 -0.164991 1.64786 0.0440029 2.33113C1.91663 8.45009 5.75889 14.2713 12.6063 14.9024C13.281 14.9644 13.8631 14.4586 13.8631 13.8326V11.8479C13.8631 11.2786 14.3426 10.7894 14.959 10.775C14.9807 10.7744 15.0023 10.7744 15.0239 10.7744C16.835 10.7744 18.8634 13.2283 19.573 14.3761C19.777 14.7063 20.1584 14.9076 20.5708 14.9076H23.3277C24.132 14.9076 24.6481 14.1134 24.2606 13.4636Z' />
                            </svg>
                        </Social>
                        <Social href='#'>
                            <svg
                                width='24'
                                height='22'
                                viewBox='0 0 24 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M22.6143 0.771792C22.2279 0.439362 21.6211 0.391797 20.9936 0.647392H20.9926C20.3327 0.916055 2.31302 8.75849 1.57946 9.0789C1.44603 9.12595 0.280782 9.5671 0.40081 10.5498C0.507959 11.4357 1.44449 11.8026 1.55885 11.845L6.14001 13.4366C6.44395 14.4631 7.56438 18.2505 7.81216 19.0597C7.96671 19.5641 8.21861 20.2268 8.66009 20.3633C9.04748 20.5148 9.4328 20.3763 9.68213 20.1777L12.483 17.5418L17.0044 21.1196L17.112 21.1849C17.4191 21.3229 17.7132 21.3919 17.994 21.3919C18.2108 21.3919 18.4189 21.3506 18.6178 21.268C19.2952 20.9858 19.5662 20.3309 19.5945 20.2566L22.9718 2.44492C23.1778 1.49363 22.8914 1.00962 22.6143 0.771792ZM10.1803 14.0732L8.63485 18.2547L7.08942 13.0278L18.9377 4.1421L10.1803 14.0732Z' />
                            </svg>
                        </Social>
                        <Social href='#'>
                            <svg
                                width='21'
                                height='21'
                                viewBox='0 0 21 21'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M5.85153 0.303711C2.81555 0.303711 0.345581 2.77368 0.345581 5.80966V14.6192C0.345581 17.6552 2.81555 20.1251 5.85153 20.1251H14.6611C17.697 20.1251 20.167 17.6552 20.167 14.6192V5.80966C20.167 2.77368 17.697 0.303711 14.6611 0.303711H5.85153ZM5.85153 2.50609H14.6611C16.4824 2.50609 17.9646 3.98829 17.9646 5.80966V14.6192C17.9646 16.4406 16.4824 17.9228 14.6611 17.9228H5.85153C4.03016 17.9228 2.54796 16.4406 2.54796 14.6192V5.80966C2.54796 3.98829 4.03016 2.50609 5.85153 2.50609ZM15.7622 3.60728C15.4702 3.60728 15.1901 3.7233 14.9836 3.92981C14.7771 4.13633 14.6611 4.41642 14.6611 4.70847C14.6611 5.00053 14.7771 5.28062 14.9836 5.48713C15.1901 5.69365 15.4702 5.80966 15.7622 5.80966C16.0543 5.80966 16.3344 5.69365 16.5409 5.48713C16.7474 5.28062 16.8634 5.00053 16.8634 4.70847C16.8634 4.41642 16.7474 4.13633 16.5409 3.92981C16.3344 3.7233 16.0543 3.60728 15.7622 3.60728ZM10.2563 4.70847C7.22031 4.70847 4.75034 7.17844 4.75034 10.2144C4.75034 13.2504 7.22031 15.7204 10.2563 15.7204C13.2923 15.7204 15.7622 13.2504 15.7622 10.2144C15.7622 7.17844 13.2923 4.70847 10.2563 4.70847ZM10.2563 6.91085C12.0777 6.91085 13.5599 8.39306 13.5599 10.2144C13.5599 12.0358 12.0777 13.518 10.2563 13.518C8.43493 13.518 6.95272 12.0358 6.95272 10.2144C6.95272 8.39306 8.43493 6.91085 10.2563 6.91085Z' />
                            </svg>
                        </Social>
                        <Social href='#'>
                            <svg
                                width='22'
                                height='18'
                                viewBox='0 0 22 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M19.7355 0.226562H3.00945C1.85954 0.226562 0.929155 1.2066 0.929155 2.40443L0.918701 15.4716C0.918701 16.6695 1.85954 17.6495 3.00945 17.6495H19.7355C20.8854 17.6495 21.8262 16.6695 21.8262 15.4716V2.40443C21.8262 1.2066 20.8854 0.226562 19.7355 0.226562ZM19.7355 4.5823L11.3725 10.027L3.00945 4.5823V2.40443L11.3725 7.8491L19.7355 2.40443V4.5823Z' />
                            </svg>
                        </Social>
                    </SocialBlock>
                    <Arrow href='#header'>
                        <svg
                            width='16'
                            height='24'
                            viewBox='0 0 16 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M8.70711 0.292892C8.31658 -0.0976315 7.68342 -0.0976314 7.29289 0.292892L0.928931 6.65685C0.538407 7.04738 0.538407 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 24L9 1L7 1L7 24L9 24Z' />
                        </svg>
                    </Arrow>
                </FooterInner>
            </Container>
        </footer>
    );
};

export default Footer;
