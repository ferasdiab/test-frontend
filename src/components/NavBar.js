import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <div>
        <Link className="link" to="/welcome">
          Welcome
        </Link>
        <Link className="link" to="/cities">
          Cities
        </Link>
      </div>
    );
}
