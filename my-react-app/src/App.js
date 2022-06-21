import './App.css';
import Register from './Register';
import Signin from './Signin';
import Survey from './Survey';
import Error from './Error';
import Home from './Home';
import SpecificSurvey from './SpecificSurvey'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <nav>
        <Link to="/"> Homepage </Link>
        <Link to="/Survey"> View Surveys </Link>
        <Link to="/Signin"> Signin </Link>
        <Link to="/Signup"> Signup </Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Survey' element={<Survey />}/>
        <Route path='/SpecificSurvey/:id' element={<SpecificSurvey />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/Signup' element={<Register />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      {/*Note:  Anything that is written inside router will be constant for all pages */}
    </Router>
  );
}

export default App;
