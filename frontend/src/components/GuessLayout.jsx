import React from 'react'
import { Outlet } from 'react-router-dom'

function GuessLayout() {
  return (
    <div>
      Guess
      <Outlet />
    </div>
  )
}

export default GuessLayout
