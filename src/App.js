import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skill from './pages/Skills/Skill';
import Contact from './pages/Contact/Contact';
import { GlobalStyle } from './assets/styles/globalStyle';
import { Helmet } from 'react-helmet';
import Navbar from './Container/Navbar/Navbar';

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
         <hr/>
         <About />
         <hr />
         <Skill />
         <hr />
         <Contact />
      </>
   );
}

export default App;
