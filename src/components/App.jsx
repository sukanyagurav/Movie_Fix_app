import React,{Suspense} from 'react'
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
    <Suspense  fallback={<div>Loading...</div>}>
     <RouterProvider router={router}/>
     </Suspense>
  )
}

export default App
