import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home, Self, Skills, Learning, Contact, Navbar} from './components/index';

const ROUTER_BASENAME =
  process.env.NODE_ENV === 'development' ? '/' : '/repo-name';

function App() {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='w-11/12 h-5/6 md:w-9/12'>
        <Router basename={ROUTER_BASENAME}>
          <Routes>
            <Route exact path='/portforio/' element={ <Home />}/>
            <Route path='/portforio/about_me' element={ <Self />}/>
            <Route path='/portforio/skills' element={ <Skills />}/>
            <Route path='/portforio/learn_more' element={ <Learning />}/>
            <Route path='/portforio/contact' element={ <Contact />}/>
          </Routes>
        </Router>
      </div>
    </div>
    </>
  );
}

export default App;
