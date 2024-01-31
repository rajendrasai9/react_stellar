import { Navbar } from "./components/navbar";
import {Home} from "./pages/home.js"
import {Explore} from "./pages/explore.js"
import {Learn} from "./pages/learn.js"
import {WhatWeDo} from "./pages/whatwedo.js"
import {Subscribe} from "./pages/subscribe.js"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './css/App.css';
import './css/explore.css';
import './css/subscribe.css';

function App() {
  return     <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/explore" element={<Explore/>} />  
          <Route path="/learn" element={<Learn/>} />    
          <Route path="/whatwedo" element={<WhatWeDo/>} />     
          <Route path="/subscribe" element={<Subscribe/>} />          
        </Routes>
      </Router>
    </div>
}

export default App;
