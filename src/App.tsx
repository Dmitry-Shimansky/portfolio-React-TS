import './App.css';
import {Header} from "./layouts/header/Header";
import {Main} from "./layouts/sections/main/Main";
import {Skills} from "./layouts/sections/skills/Skills";
import {Works} from "./layouts/sections/works/Works";
import {Testimony} from "./layouts/sections/testimony/Testimony";
import {Contacts} from "./layouts/sections/contacts/Contacts";
import {Footer} from "./layouts/footer/Footer";
import {Particle} from "./components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
