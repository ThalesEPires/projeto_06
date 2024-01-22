import { BrowserRouter } from "react-router-dom"

import { EstiloGlobal, MainContainer } from "./Styles"

import { store } from "./Store"
import Footer from "./Container/Footer"
import Rotas from "./routes"
import { Provider } from "react-redux"



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <MainContainer>
          <Rotas />
          <Footer />
        </MainContainer>
      </BrowserRouter>
    </Provider>
  )
}

export default App
