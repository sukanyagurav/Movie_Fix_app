import React,{Suspense} from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Feed from './Feed/Feed'
import RootLayout from './RootLayout'
import Search from './SearchFeed/SearchFeed'
const router= createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      },
      {
        path:'/search/:searchTerm',
        element:<Search/>
      }
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
