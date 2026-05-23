import React from 'react'
import { Header } from '../Page/Header'
import {Box} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Project from '../Page/Project'
import About from '../Page/About'
import Home from '../Page/Home'

const Layout = () => {
  return (
   <div>
    <Box>
      <Header></Header>
 
       
        <Outlet></Outlet>
       </Box>



    </Box>
   </div>
  )
}

export default Layout