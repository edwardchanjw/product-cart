import React, { PropTypes } from 'react'

const ItemsSection = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div className="row">{children}</div>
  </div>
)

ItemsSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ItemsSection
