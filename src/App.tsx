import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Profile from './pages/profile'
import Direct from './pages/direct'
import Home from './pages/home'
import Search from './pages/search'
import Explore from './pages/explore'
import Reels from './pages/reels'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/reels' element={<Reels />} />
        <Route path='/direct' element={<Direct />} />
        {/* <Route path='/notifications' element={<Notification />} />
        <Route path='/new' element={<New />} /> */}
        <Route path='/perfil/DrawWithMe' element={<Profile />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )

}

