// document.addEventListener("DOMContentLoaded", () => {
//     const deleteButton = document.getElementById("");
//     const errorMessage = document.getElementById("");
  
//     deleteButton.addEventListener("click", async () => {
//       const productId = deleteButton.dataset.productId; 
//       try {
//         const response = await fetch(`/api/products/${productId}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to delete product');
//         }
  
//         const data = await response.json();
//         console.log('Product deleted successfully:', data);
//         window.location.href = '/products'; 
//       } catch (error) {
//         errorMessage.textContent = error.message;
//         errorMessage.style.color = 'red';
//       }
//     });
//   });
  