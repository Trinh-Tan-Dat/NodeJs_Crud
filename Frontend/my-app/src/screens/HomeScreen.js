import React from 'react'

function HomeScreen() {
  return (
    //create navigation bar include home, login, myBags
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Library</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/Home">Home <span className="sr-only"></span></a>
                    <a className="nav-item nav-link" href="#">Login</a>
                    <a className="nav-item nav-link" href="#">MyBags</a>
                    <a className="nav-item nav-link ml-auto" href="#">Log out</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default HomeScreen