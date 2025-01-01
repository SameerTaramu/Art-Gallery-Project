const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

fetchProducts();

// const displayProducts = async () => {
//   const products = await fetchProducts();
//   const productContainer = document.querySelector(".arts");
//   productContainer.innerHTML = "";
//   products.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("art-item");
//     productDiv.innerHTML = `
//       <img src=${product.image} alt="" class="product-img">
//                 <p>Artist Name: ${product.owner?.name||""}</p>
//                 <p>title: ${product.name}</p>
//                 <h3 class="product-title">Abstract Pic</h3>
//                 <span class="price">Rs: ${product.price}</span>
//                 <a href="#" class="btn">Add To Cart</a>
//     `;
//     productContainer.appendChild(productDiv);
//   });
// };
// displayProducts();
