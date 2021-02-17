import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import M from "materialize-css";
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  useEffect(() => {
    // Update the document title using the browser API

    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);


  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">JSG,Bharuch</a>
        {links}
        <ul
          ref={(Sidenav) => {
            Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav sidenav-close"
        >


          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>

        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
