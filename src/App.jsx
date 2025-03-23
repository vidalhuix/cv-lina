import Sidenav from './components/Sidenav';
import Main from './components/Main';
import { Presentation } from './components/Presentation';
import { Work } from './components/Work';
import { Studies } from './components/Studies';
// import { Projects } from "./components/Projects";
// import { Skills } from "./components/Skills";
import { Contact } from './components/Contact';
import { UnderContact } from './components/UnderContact';
import { Reviews } from './components/Reviews';

export const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <Presentation />
      <Work />
      <Studies />
      {/* 
      <Reviews />
      <Skills />
      <Projects />
      <UnderContact /> */}
      <Contact />
      <UnderContact />
    </>
  );
};
