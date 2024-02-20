import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './componends/home/Home.jsx'
import About from './componends/about/About.jsx'
import Contact from './componends/contact/Contact.jsx'
import Github from './componends/github/Github.jsx'


//Method 1st to create React Router
/* const router = createBrowserRouter([
  {
    path: "/",
    element : <Root />,
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "About",
      element: <About />

    },{
      path: "Contact",
      element: <Contact />
    }]
  }
]) */


// Method 2nd to creat e react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
