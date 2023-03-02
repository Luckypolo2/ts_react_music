import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/views/discover/c-cpns/navbar/NavBar'

const Discover: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}
export default React.memo(Discover)
