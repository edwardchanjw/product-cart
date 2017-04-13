import React, { PropTypes } from 'react'

const GridDescription = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

GridDescription.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default GridDescription
