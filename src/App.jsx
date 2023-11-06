import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vanslist, {loader as vansListLoader} from './Pages/Vans/Vanslist'
import VansDetails from './Pages/Vans/VansDetails'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import Dashboard from './Pages/Host/Dashboard'
import Layout from './Components/Layout'
import Hosts from './Pages/Host/Hosts'
import HostVans from './Pages/Host/HostVans'
import HostVansDetail from './Pages/Host/HostVansDetail'
import './server'
import Pricing from './Pages/Host/Pricing'
import Photos from './Pages/Host/Photos'
import Details from './Pages/Host/Details'
import ErrorPage from './Pages/ErrorPage'
import Error from './Pages/Vans/Error'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vanslist />} loader={vansListLoader} errorElement={< Error/>}/>
          <Route path="vans/:id" element={<VansDetails />}/>

        <Route path='hosts' element={<Hosts />}>
          <Route index element={< Dashboard/>} />
          <Route path="income" element={<Income />}/>
          <Route path="hvans" element={<HostVans />}/>
          <Route path="hvans/:id" element={<HostVansDetail />}>
            <Route index element={<Details />}/>
            <Route path='pricing' element={<Pricing />}/>
            <Route path='photos' element={<Photos />}/>
          </Route>
          <Route path="reviews" element={<Reviews />}/>

        </Route>
        <Route path='*' element={< ErrorPage/>}/>
    </Route>
  ))


  return(
  <RouterProvider router={router}/>
)
}

export default App
