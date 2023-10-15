import React from 'react'
import { Outlet } from 'react-router-dom'

function UsersLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default UsersLayout
