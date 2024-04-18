import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CartContextProvider } from "./contexts/CartContext"

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <GlobalStyle />
            <CartContextProvider>
              <Header />
              <Router />
            </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
