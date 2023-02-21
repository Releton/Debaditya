import Home from './pages/home'

import { Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contact from './pages/contact'
import Project from './pages/project'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 className='text-[20rem] '>404</h1>
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <h1>OppS</h1>
  },{
    path: "/projects",
    element: <Project />,
    errorElement: <h1>Failed to load</h1>
  }
])


function App() {

  return (
    <div onMouseMove={(event)=>{
      const blob = document.getElementById("blob")
      const {clientX, clientY} = event;
      if(!((clientX-200 < 0 || clientX+200 > window.innerWidth)||( clientY+200 > window.innerHeight))){
        blob.style.left = `${clientX-150}px`
        blob.style.top = `${clientY-150}px`
        blob.style.width = '200px'
        blob.style.filter = 'blur(200px)'
      }
      else{
        blob.style.width = '100px'
        blob.style.filter = 'blur(100px)'
        blob.style.left = `${clientX-50}px`
        blob.style.top = `${clientY-50}px`
      }

    }}>
      <RouterProvider router={Router} />
      <div style={{
        backgroundImage: "linear-gradient(to right, teal, purple)",
        width: "300px",
        aspectRatio: "1/1",
        position: "absolute",
        zIndex: "-1",
        borderRadius: "100%",
        filter: "blur(150px)",
        position: "fixed"

      }}  id='blob'></div>
    </div>
  )
}

export default App
