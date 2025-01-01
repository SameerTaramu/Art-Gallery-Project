function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('active');
    } else {
      console.error(`No section found with ID: ${sectionId}`);
    }
  }
  

// document.addEventListener('DOMContentLoaded', () => {
//   fetchProducts();
//   fetchUsers();
//   fetchReviews();
//   fetchOrders();
// });

// async function fetchProducts() {
//   try {
//     const response = await fetch('/admin/art');
//     const products = await response.json();
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = products
//       .map(
//         (product) => `
//         <tr>
//           <td>${product._id}</td>
//           <td>${product.title}</td>
//           <td>${product.price}</td>
//           <td>${product.category || 'N/A'}</td>
//           <td>
//             <button onclick="editProduct('${product._id}')">Edit</button>
//             <button onclick="deleteProduct('${product._id}')">Delete</button>
//           </td>
//         </tr>`
//       )
//       .join('');
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// async function fetchUsers() {
//   try {
//     const response = await fetch('/admin/users');
//     const users = await response.json();
//     const userList = document.getElementById('user-list');
//     userList.innerHTML = users
//       .map(
//         (user) => `
//         <tr>
//           <td>${user._id}</td>
//           <td>${user.name}</td>
//           <td>${user.email}</td>
//           <td>${user.role}</td>
//           <td>
//             <button onclick="deleteUser('${user._id}')">Delete</button>
//           </td>
//         </tr>`
//       )
//       .join('');
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// }

// async function fetchReviews() {
//   try {
//     const response = await fetch('/admin/reviews');
//     const reviews = await response.json();
//     const reviewList = document.getElementById('review-list');
//     reviewList.innerHTML = reviews
//       .map(
//         (review) => `
//         <tr>
//           <td>${review._id}</td>
//           <td>${review.product}</td>
//           <td>${review.user}</td>
//           <td>${review.rating}</td>
//           <td>${review.comment}</td>
//           <td>
//             <button onclick="deleteReview('${review._id}')">Delete</button>
//           </td>
//         </tr>`
//       )
//       .join('');
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//   }
// }

// async function fetchOrders() {
//   try {
//     const response = await fetch('/admin/orders');
//     const orders = await response.json();
//     const orderList = document.getElementById('order-list');
//     orderList.innerHTML = orders
//       .map(
//         (order) => `
//         <tr>
//           <td>${order._id}</td>
//           <td>${order.user}</td>
//           <td>${order.total}</td>
//           <td>${order.status}</td>
//           <td>
//             <button onclick="updateOrderStatus('${order._id}', 'Completed')">Mark as Completed</button>
//           </td>
//         </tr>`
//       )
//       .join('');
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//   }
// }

// function editProduct(productId) {
//   console.log(`Edit product: ${productId}`);
 
// }

// function deleteProduct(productId) {
//   console.log(`Delete product: ${productId}`);
 
// }

// function deleteUser(userId) {
//   console.log(`Delete user: ${userId}`);
  
// }

// function deleteReview(reviewId) {
//   console.log(`Delete review: ${reviewId}`);
  
// }

// function updateOrderStatus(orderId, status) {
//   console.log(`Update order ${orderId} to status: ${status}`);
 
// }
