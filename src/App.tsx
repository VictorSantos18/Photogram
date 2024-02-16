import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Profile from './pages/profile'
import Direct from './pages/page5'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Page1 />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/direct' element={<Direct />} />
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

