import { GlobalStyle } from "./assets/styles/globalStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Footer />
        </div>
    );
};

export default App;
