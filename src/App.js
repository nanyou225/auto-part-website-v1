import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import NavbarCatalog from "./components/Navbar/NavbarCatalog";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    GlobalStyle: "black",
    Navbar: "#29323c",
    body: "#E8E8E8",
    NavbarCatalog: "yellowgreen",
    Footer: "#29323c",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <NavbarCatalog />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
