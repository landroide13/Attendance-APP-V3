import React from 'react'
import { Outlet } from 'react-router-dom'

function GuessLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default GuessLayout
