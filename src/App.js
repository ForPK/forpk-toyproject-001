import "./App.css";
import { GlobalStyle, PageTemplate } from "./styled";
import { Header } from "./components/Header/index";
import { Main } from "./components/Main/index";
import { Setting } from "./components/Setting/index";
import { Result } from "./components/Result/index";
import { Footer } from "./components/Footer/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageTemplate>
        <Header />
        <Main />
        <Setting />
        <Result />
        <Footer />
      </PageTemplate>
    </>
  );
}

export default App;
