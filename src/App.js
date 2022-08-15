import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import NavbarCatalog from "./components/Navbar/NavbarCatalog";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <NavbarCatalog />
    </BrowserRouter>
  );
}

export default App;
