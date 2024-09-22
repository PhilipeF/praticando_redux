import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './store/index'
import ListaDeContatos from "./components/ListaDeContato"
import Form from "./components/Formulario"
import GlobalStyle, { Container } from "./styles/global"

const rotas = createBrowserRouter([
    {
        path: '/',
        element: <ListaDeContatos />
    },
    {
        path: '/form',
        element: <Form />
    }
])

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Container>
                <RouterProvider router={rotas}/>
            </Container>
        </Provider>
    )
}

export default App
