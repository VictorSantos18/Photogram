import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import Direct from './pages/direct';
import Home from './pages/home';
import Search from './pages/search';
import Explore from './pages/explore';
import Notifications from './pages/notifications';


const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
   
  };
  return (
    <Router>
      <div className={`app ${theme}-theme`}> {/* Aplicando a classe CSS do tema */}
        <Routes>
          <Route path='/' element={<Home toggleTheme={toggleTheme} />} />
          <Route path='/search' element={<Search toggleTheme={toggleTheme} />} />
          <Route path='/explore' element={<Explore toggleTheme={toggleTheme} />} />
          <Route path='/direct' element={<Direct toggleTheme={toggleTheme} />} />
          <Route path='/notifications' element={<Notifications toggleTheme={toggleTheme} />} />
          <Route path='/perfil/DrawWithMe' element={<Profile toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
