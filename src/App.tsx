import { GlobalStyle } from "./assets/styles/globalStyles";
import About from "./components/About/About";
import Adv from "./components/Adv/Adv";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";

const App = () => {
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
            </main>
            <Footer />
        </div>
    );
};

export default App;
