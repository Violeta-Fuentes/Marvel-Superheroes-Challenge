import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Home } from './components/Home/Home';
import './App.css';
import { Heroes } from './components/Heroes/Heroes';
import { HeroeDetail } from './components/HeroeDetail/HeroeDetail';
import { Favorites } from './components/Favorites/Favorites';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path= "/heroes" element= {<Heroes />} />
        <Route path= "/favorites" element= {<Favorites />} />
        <Route path= "/heroeDetail/:id" element= {<HeroeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
