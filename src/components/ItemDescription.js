import React, { PropTypes } from 'react'

const ItemDescription = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

ItemDescription.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default ItemDescription
