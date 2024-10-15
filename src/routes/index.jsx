import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Organization, RegionUser } from '../pages'
import CapitalUser from '../pages/CapitalUser'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Organization/>} />
        <Route path='/capital-users' element={<CapitalUser/>} />
        <Route path='/region-users' element={<RegionUser/>} />

    </Routes>
  )
}

export default CustomRoutes
