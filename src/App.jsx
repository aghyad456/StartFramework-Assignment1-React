
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './assets/layout/MainLayout'

const router = createBrowserRouter([
  {path : '/', element : <MainLayout />, children: [
    {path : 'home', element :<Navigate to={"/"}/>} ,
    {index :true, element : <Home />},
    {path : 'about', element : <About />},
    {path : 'portfolio', element : <Portfolio />},
    {path : 'contact', element : <Contact />}
  ]
}
])

export default function App() {
  return <>
 
  <RouterProvider router={router} />

    </>

}

