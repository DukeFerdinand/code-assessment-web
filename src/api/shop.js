/**
 * Mocking client-server processing
 */
const TIMEOUT = 100

const url = 'http://tech.work.co/shopping-cart/products.json'

export default {
  getProducts: cb => fetch(url).then(res => res.json()).then(data => cb(data)),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
