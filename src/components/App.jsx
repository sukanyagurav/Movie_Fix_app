import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Feed from './Feed/Feed'
import RootLayout from './RootLayout'
const router= createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
     
    ]
  }
 

])
const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}

export default App
