import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';

const Home = () => <h1>Ana Sayfa</h1>;
const Film = () => <h1>Filmler</h1>;
const Contact = () => <h1>İletişim</h1>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmler" element={<Film />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
