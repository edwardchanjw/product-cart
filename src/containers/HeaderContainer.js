import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


import { Link, Route, Switch } from 'react-router-dom'
const HeaderContainer = ({ products, addToCart }) => (
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <Link to={ '/' } className="navbar-brand">BootStrap NavBar </Link>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to={ '/' } className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={ '/product' } className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
        <Link to={ '/cart' } className="nav-link">Cart</Link>

      </li>
    </ul>


  </div>
</nav>
)

HeaderContainer.propTypes = {
  
}

const mapStateToProps = state => ({
 
})

export default connect(
  mapStateToProps,
  {  }
)(HeaderContainer)
