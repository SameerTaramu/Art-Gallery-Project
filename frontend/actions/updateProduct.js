// document.addEventListener("DOMContentLoaded", () => {
//   const productForm = document.getElementById("");
//   const errorMessage = document.getElementById("");

//   productForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const productId = productForm.dataset.productId; 
//     const name = document.getElementById("name").value;
//     const description = document.getElementById("description").value;
//     const price = document.getElementById("price").value;
//     const category = document.getElementById("category").value;
//     const image = document.getElementById("image").value;

//     const updatedProduct = { name, description, price, category, image };

//     try {
//       const response = await fetch(`/api/products/update/${productId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
//         },
//         body: JSON.stringify(updatedProduct),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update product');
//       }

//       const product = await response.json();
//       console.log('Product updated successfully:', product);
//     } catch (error) {
//       errorMessage.textContent = error.message;
//       errorMessage.style.color = 'red';
//     }
//   });
// });
