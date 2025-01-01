// const userId = "";
// const nameInput = document.getElementById("");
// const emailInput = document.getElementById("");
// const roleInput = document.getElementById("");
// const errorMessage = document.getElementById("");

// const updateUserBtn = document.getElementById("");
// const deleteUserBtn = document.getElementById("");

// updateUserBtn.addEventListener("click", async () => {
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const role = roleInput.value;

//   if (!name || !email) {
//     errorMessage.textContent = "Name and Email are required.";
//     return;
//   }

//   try {
//     const response = await fetch(`/api/users/${userId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
//       },
//       body: JSON.stringify({ name, email, role })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update user');
//     }

//     const data = await response.json();
//     alert('User updated successfully!');
//     location.reload();

//   } catch (error) {
//     errorMessage.textContent = error.message;
//   }
// });

// deleteUserBtn.addEventListener("click", async () => {
//   try {
//     const response = await fetch(`/api/users/${userId}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete user');
//     }

//     const data = await response.json();
//     alert('User deleted successfully!');
//     window.location.href = "/users";

//   } catch (error) {
//     errorMessage.textContent = error.message;
//   }
// });