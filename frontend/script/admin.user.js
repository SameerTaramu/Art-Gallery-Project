const fetchAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUserbyId = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    displayAllUsers();
  } catch (error) {
    console.error(error);
  }
};

const displayAllUsers = async () => {
  const users = await fetchAllUsers();
  const productsContainer = document.querySelector("#user-list");
  productsContainer.innerHTML = "";

  if (users?.length > 0) {
    users.forEach((user) => {
      const RootDiv = document.createElement("tr");
      RootDiv.classList.add("product-item");
      const productItemHtml = `
            <td>${user._id}</td>
              <td>${user.name}</=>
              <td>${user.email}</td>
              <td>${user.isAdmin ? "Admin" : "User"}</td>
             <div class="action-button">
                <button class="delete-button" onClick="deleteUserbyId('${
                  user._id
                }')">Delete</button>
             </div>
             </td>
    `;
      RootDiv.innerHTML = productItemHtml;
      productsContainer.insertAdjacentElement("beforeend", RootDiv);
    });
  }
};
displayAllUsers();
