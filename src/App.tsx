import './App.css';
import {Header} from "./layouts/header/Header";
import {Main} from "./layouts/sections/main/Main";
import {Skills} from "./layouts/sections/skills/Skills";
import {Works} from "./layouts/sections/works/Works";
import {GlobalStyle} from "./styles/GlobalStyle";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header />
            <Main />
            <Skills />
            <Works />
        </div>
    );
}

export default App;
