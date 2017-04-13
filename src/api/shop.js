/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

export default {
  getItems: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyItems: (payload, cb, timeout) => setTimeout(() => cb( Math.random() >= 0.5 ? true:false), timeout || TIMEOUT)

}
