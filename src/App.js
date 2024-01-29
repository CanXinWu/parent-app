import { 
  BrowserRouter as Router, 
  Route, 
  Link,  
  Routes,
  Redirect
} from 'react-router-dom'
import Home from './page/home/Home.jsx'
import './App.css';
function App() {
  return (
    <div id='yourContainer'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
