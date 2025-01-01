// Sample order data
const order = {
    user: { name: "John Doe" },
    shippingInfo: {
      phoneNo: "9876543210",
      address: "123 Street",
      city: "City",
      state: "State",
      pinCode: "12345",
      country: "Country",
    },
    paymentInfo: { status: "succeeded" },
    totalPrice: 1500,
    orderStatus: "Processing",
    orderItems: [
      { product: "1", name: "Product 1", quantity: 2, price: 500, image: "https://via.placeholder.com/50" },
      { product: "2", name: "Product 2", quantity: 1, price: 500, image: "https://via.placeholder.com/50" },
    ],
  };
  
  // Populate order details
  document.getElementById("customerName").textContent = order.user.name;
  document.getElementById("phoneNo").textContent = order.shippingInfo.phoneNo;
  document.getElementById("address").textContent = `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`;
  document.getElementById("paymentStatus").textContent = order.paymentInfo.status === "succeeded" ? "PAID" : "NOT PAID";
  document.getElementById("amount").textContent = `₹${order.totalPrice}`;
  document.getElementById("orderStatus").textContent = order.orderStatus;
  
  // Populate cart items
  const cartItemsContainer = document.getElementById("cartItems");
  order.orderItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="Product">
      <p>${item.name}</p>
      <span>${item.quantity} X ₹${item.price} = <b>₹${item.quantity * item.price}</b></span>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });
  
  // Update order status
  const updateOrderForm = document.getElementById("updateOrderForm");
  const statusSelect = document.getElementById("status");
  const processOrderBtn = document.getElementById("processOrderBtn");
  
  statusSelect.addEventListener("change", () => {
    processOrderBtn.disabled = statusSelect.value === "";
  });
  
  updateOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newStatus = statusSelect.value;
    console.log(`Order updated to: ${newStatus}`);
    alert(`Order status updated to: ${newStatus}`);
    document.getElementById("orderStatus").textContent = newStatus;
  });
  