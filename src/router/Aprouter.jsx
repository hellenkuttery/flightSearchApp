import React from 'react'
import Layout from '../pages/Layout'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Approuter = () => {


    const router=createBrowserRouter([
        {path:"/", element:<Layout/> }
    ])


  return <RouterProvider router={router} />
}

export default Approuter