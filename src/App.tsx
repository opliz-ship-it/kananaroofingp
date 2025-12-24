import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LanguageWrapper from './components/LanguageWrapper';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;