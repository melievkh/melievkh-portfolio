import Home from './pages/home/Home';
import About from './pages/about/About';
import Skill from './pages/skills/Skill';
import Contact from './pages/contact/Contact';
import { GlobalStyle } from './assets/styles/globalStyle';
import Navbar from './components/navbar/Navbar';
import { Helmet } from 'react-helmet';

function App() {
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>melievkh portfolio</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <GlobalStyle />
         <Navbar />
         <Home />
         <hr />
         <About />
         <hr />
         <Skill />
         <hr />
         <Contact />
      </>
   );
}

export default App;
