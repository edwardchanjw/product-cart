import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


const receiveItems = products => ({
  type: types.RECEIVE_ITEMS,
  products: products
})

export const getAllItems = () => dispatch => {
  shop.getItems(products => {
    dispatch(receiveItems(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}



export const checkout = (products,s,f) => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CART_CHECKOUT_REQUEST
  })
  shop.buyItems(products, (success) => {
    console.log(s + f)
    console.log(success)

    if(success){
      dispatch({
        type: types.CART_CHECKOUT_SUCCESS,
        cart
      })
      dispatch(push(s))
    }else{
      dispatch({
        type: types.CART_CHECKOUT_FAILURE,
        cart
      })
      dispatch(push(f))

    }

    
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CART_CHECKOUT_FAILURE, cart })
  })
}