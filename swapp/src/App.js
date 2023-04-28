import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import "./index.css";
import Home from './pages/Home';
import Shıps from './pages/Shıps';
import Characters from './pages/Characters';
function App() {
  return (
    <div className="h-screen w-screen ">
      <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/shıps' element={<Shıps/>}/>
          <Route path='/characters' element={<Characters/>}/>
      </Route>
     </Routes> 
    </div>
  );
}

export default App;
