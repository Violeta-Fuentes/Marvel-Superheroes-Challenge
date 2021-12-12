import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Home } from './components/Home/Home';
import './App.css';
import { Heroes } from './components/Heroes/Heroes';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path= "/heroes" element= {<Heroes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
