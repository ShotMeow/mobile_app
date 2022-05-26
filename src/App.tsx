import { GlobalStyle } from "./assets/styles/globalStyles";
import About from "./components/About/About";
import Adv from "./components/Adv/Adv";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <main>
                <About />
                <Adv />
            </main>
            <Footer />
        </div>
    );
};

export default App;
