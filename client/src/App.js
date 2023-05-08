import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TypePage from './pages/TypePage';
import TestPage from './pages/TestPage';
import Background from './pages/Background';
import Header from './components/Header';
import Types from './components/Types';
import Footer from './components/Footer';
import LanguageContextProvider from "./context/languageContext";

function App() {
  return (
    <LanguageContextProvider>
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/background" element={<Background/>}/>
          <Route path="/types" element={<Types/>}/>
          <Route path="/type/:id" element={<TypePage/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
