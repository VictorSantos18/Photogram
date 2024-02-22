import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import Direct from './pages/direct';
import Home from './pages/home';
import Search from './pages/search';
import Explore from './pages/explore';
import Reels from './pages/reels';
import Notifications from './pages/notifications';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/reels' element={<Reels />} />
        <Route path='/direct' element={<Direct />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/perfil/DrawWithMe' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
