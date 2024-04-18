import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Header } from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Router />
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
