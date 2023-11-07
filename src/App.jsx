import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist, {loader as vansListLoader} from './Pages/Vans/Vanslist'
import VansDetails, {loader as vanDetailLoader} from './Pages/Vans/VansDetails'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import Dashboard from './Pages/Host/Dashboard'
import Layout from './Components/Layout'
import Hosts from './Pages/Host/Hosts'
import HostVans, {loader as hostVansLoader} from './Pages/Host/HostVans'
import HostVansDetail, {loader as hostVansDetailLoader} from './Pages/Host/HostVansDetail'
import './server'
import Pricing from './Pages/Host/Pricing'
import Photos from './Pages/Host/Photos'
import Details from './Pages/Host/Details'
import ErrorPage from './Pages/ErrorPage'
import Error from './Pages/Vans/Error'
import Login, {loader as loginLoader} from './Pages/Login'
import { requireAuth } from './utils'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vanslist />} loader={vansListLoader} errorElement={< Error/>}/>
          <Route path="vans/:id" element={<VansDetails />} loader={vanDetailLoader}/>
          <Route path="login" element={<Login />} loader={loginLoader}/>

    
        <Route path='hosts' element={<Hosts />}>
          <Route index element={< Dashboard/>} loader={async () => await requireAuth()} />
          
          <Route path="income" element={<Income />} loader={async () => await requireAuth()}/>

          <Route path="hvans" element={<HostVans />} loader={hostVansLoader}/>
          <Route path="hvans/:id" element={<HostVansDetail />} loader={hostVansDetailLoader}>
            <Route index element={<Details />} loader={async () => await requireAuth()}/>
            <Route path='pricing' element={<Pricing />} loader={async () => await requireAuth()}/>
            <Route path='photos' element={<Photos />} loader={async () => await requireAuth()}/>
          </Route>
          <Route path="reviews" element={<Reviews />} loader={async () => await requireAuth()}/>

        </Route>
      


        <Route path='*' element={< ErrorPage/>}/>
    </Route>
  ))


  return(
  <RouterProvider router={router}/>
)
}

export default App
