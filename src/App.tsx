import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/Main";
import {Quote} from "./layout/section/Quote";
import {Projects} from "./layout/section/Projects";
import {Skills} from "./layout/section/Skills";
import {AboutMe} from "./layout/section/AboutMe";
import {Contacts} from "./layout/section/Contacts";
import {Footer} from "./layout/section/Footer";
import {Particale} from "./components/particale/Particale";


export function App() {
    return (
        <div className="App">
            <Particale/>
            <Header/>
            <Main/>
            <Quote/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}



