import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/portfolio' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/portfolio/about' element={<About/>}/>
        <Route path='/portfolio/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
