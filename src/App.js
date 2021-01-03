import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, PageTemplate } from "./styled";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Routes from "./components/Router/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PageTemplate>
        <Header />
        <Routes />
        <Footer />
      </PageTemplate>
    </BrowserRouter>
  );
}

export default App;
