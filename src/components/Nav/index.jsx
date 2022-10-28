import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <br />
       <Link to={`/about`}>About</Link>
        <br />
        <Link to={`/payment`}>Payment</Link>
          <br />
    </div>
  )
}

export default Nav
