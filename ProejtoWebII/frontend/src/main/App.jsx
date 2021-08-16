import Logo from "../components/template/Logo"
import Nav from "../components/template/Nav"
import Main from "../components/template/Main"
import Footer from "../components/template/Footer"
import App from "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Inicio" subtitle="Modelo Projeto Web">
            <div className="display-4">Seja bem vindo</div>
            <hr/>
            <p className="mb-0">Exemplo</p>
        </Main>
        <Footer/>
    </div>