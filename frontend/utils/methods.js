function setUserInLocalStorage(user) {
  console.log("storing user ", user);
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function removeUserFromLocalStorage() {
  localStorage.removeItem("user");
}

// function setAuthTokenInLocalStorage(token) {
//   console.log("Storing auth token:", token);
//   localStorage.setItem("authToken", token);
// }

// function getAuthTokenFromLocalStorage() {
//   const token = localStorage.getItem("authToken");
//   return token ? token : null;
// }

// function removeAuthTokenFromLocalStorage() {
//   localStorage.removeItem("authToken");
//   console.log("Auth token removed");
// }

// function setProductInLocalStorage(product) {
//   console.log("Storing product:", product);
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   products.push(product); 
//   localStorage.setItem("products", JSON.stringify(products));
// }

// function getProductsFromLocalStorage() {
//   const products = localStorage.getItem("products");
//   return products ? JSON.parse(products) : [];
// }

// function removeProductFromLocalStorage(productId) {
//   let products = JSON.parse(localStorage.getItem("products")) || [];
//   products = products.filter(product => product.id !== productId); 
//   localStorage.setItem("products", JSON.stringify(products));
//   console.log(`Product with ID ${productId} removed`);
// }

