const getStoredCart = () => {
  let cart = [];
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    cart = JSON.parse(storedCartString);
  }
  return cart;
};

const saveCartToLocalStorage = (cart) => {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
};

const setStoredCart = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage
  saveCartToLocalStorage(cart);
};

const removeStoredCart = (id) => {
  const cart = getStoredCart();
  // removing every id
  const remainingCart = cart.filter((bottle) => bottle !== id);
  // save to local storage
  saveCartToLocalStorage(remainingCart);
};

export { getStoredCart, setStoredCart, removeStoredCart };
