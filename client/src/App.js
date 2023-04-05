import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Api from './components/Api';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Hero/>
      <Api/>
      <Step1/>
      <Step2/>
    </div>
    </BrowserRouter>
  );
}

export default App;
