import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Api from './components/Api';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Types from './components/Types';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TypePage from './pages/TypePage';
import TestPage from './pages/TestPage';
import Background from './pages/Background';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <Api/>
              <Step1/>
              <Step2/>
              <Step3/>
              <Types/>
            </>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/background" element={<Background/>}/>
          <Route path="/types" element={<Types/>}/>
          <Route path="/type/:id" element={<TypePage/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
