import React from 'react'
import { Outlet } from 'react-router-dom'

function UsersLayout() {
  return (
    <div>
      Users
      <Outlet />
    </div>
  )
}

export default UsersLayout
