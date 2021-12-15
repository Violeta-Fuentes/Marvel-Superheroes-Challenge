import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Heroes } from './components/Heroes/Heroes';
import { HeroeDetail } from './components/HeroeDetail/HeroeDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path= "/heroes" element= {<Heroes />} />
          <Route path= "/heroeDetail/:id" element= {<HeroeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;