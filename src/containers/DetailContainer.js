import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getFilterProducts } from '../reducers/products'
import Item from '../components/Item'
import ItemsList from '../components/ItemsSection'

const DetailContainer = ({ products, match, addToCart }) => (
  <ItemsList title="Products">
    {products.map(product =>
      product.id == match.params.id?
      <Item
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
        : <div></div>
    )}
  </ItemsList>
)

DetailContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, match) => ({
  products: getFilterProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(DetailContainer)
