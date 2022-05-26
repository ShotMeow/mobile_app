import { GlobalStyle } from "./assets/styles/globalStyles";
import About from "./components/About/About";
import Adv from "./components/Adv/Adv";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <main>
                <About />
                <Adv />
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default App;
