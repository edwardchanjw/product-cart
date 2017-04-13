import React, { PropTypes } from 'react'
import ItemDescription from './ItemDescription'
import CartButton from './CartButton'


const Item = ({ product, onAddToCartClicked }) => (
  <div className="col-12">
    <ItemDescription
      title={product.title}
      price={product.price} />
    <CartButton product={product} onAddToCartClicked={onAddToCartClicked}/>
  </div>
)

Item.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default Item
