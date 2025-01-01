// Sample order data
const orders = [
    {
      _id: "12345",
      orderItems: ["Item1", "Item2"],
      totalPrice: 1500,
      orderStatus: "Delivered",
    },
    {
      _id: "67890",
      orderItems: ["Item1"],
      totalPrice: 500,
      orderStatus: "Pending",
    },
  ];
  
  // Function to delete an order
  function deleteOrder(id) {
    console.log(`Order with ID ${id} deleted.`);
    // Logic to delete the order
    const row = document.getElementById(`order-${id}`);
    if (row) row.remove();
  }
  
  // Populate order table
  function populateOrders() {
    const tbody = document.querySelector("#orderTable tbody");
  
    orders.forEach((order) => {
      const row = document.createElement("tr");
      row.id = `order-${order._id}`;
      row.innerHTML = `
        <td>${order._id}</td>
        <td class="${order.orderStatus === "Delivered" ? "greenColor" : "redColor"}">
          ${order.orderStatus}
        </td>
        <td>${order.orderItems.length}</td>
        <td>₹${order.totalPrice}</td>
        <td class="actions">
          <button onclick="editOrder('${order._id}')">Edit</button>
          <button onclick="deleteOrder('${order._id}')">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Edit order function (placeholder)
  function editOrder(id) {
    console.log(`Edit order with ID ${id}`);
    // Logic to redirect to edit page
  }
  
  // Populate the table when the page loads
  document.addEventListener("DOMContentLoaded", populateOrders);
  