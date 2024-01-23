import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Personality from './Personality/Personality';
import Skill from './Skill/Skill';
import Why from './Skill/Why';
import Contact from './Contact/Contact';
import Nav from './Nav/Nav';

export default function App() {

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Personality />
      <Skill />
      <Why />
      <Contact />
    </>
  );
}
