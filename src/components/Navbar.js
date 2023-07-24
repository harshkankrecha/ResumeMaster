import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Resume Builder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resume">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cv">CV</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/coverletter">Cover Letter</a>
      </li>
      
    </ul>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
