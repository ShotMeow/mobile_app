import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyle } from "./assets/styles/globalStyles";
import About from "./components/About/About";
import Adv from "./components/Adv/Adv";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Portfolio from "./components/Portfolio/Portfolio";
import Questions from "./components/Questions/Questions";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import { useAppSelector } from "./store/hooks";

const App = () => {
    const isModal = useAppSelector((store) => store.modal.isActive);
    return (
        <div>
            <GlobalStyle />
            <Header />
            <main>
                <About />
                <Adv />
                <Services />
                <Steps />
                <Calculator />
                <Portfolio />
                <Reviews />
                <Questions />
            </main>
            <Footer />
            <AnimatePresence>{isModal && <Modal />}</AnimatePresence>
        </div>
    );
};

export default App;
