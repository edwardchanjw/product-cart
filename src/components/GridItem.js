import React, { PropTypes } from 'react'
import ItemDescription from './ItemDescription'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'

const GridItem = ({ product, onAddToCartClicked }) => (


  <div className="col-3">
    <div className="card">
      <img className="card-img-top" src="http://placehold.it/350x150" alt="Card image cap" />
      <div className="card-block">
       
        <h4 className="card-title"></h4>
        <h6 className="card-subtitle mb-2 text-muted"></h6>
        <p className="card-text"> 
          <ItemDescription
            title={product.title}
            price={product.price} />
        </p>
        <Link to={ '/product/'  + product.id} className="card-link">Detail</Link>

        <CartButton product={product} onAddToCartClicked={onAddToCartClicked}/>
      </div>
    </div>
  </div>

)

GridItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default GridItem
