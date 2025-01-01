const fetchUserDetails = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/user");
        return response.data;
    } catch (error) {
        console.error("Error fetching user details:", error);
    }
};
const initUserAvatar = async () => {
const user = getUserFromLocalStorage();
    if (user) {

        const avatarBtn = document.querySelector("#avatar-btn");
        const userDropdown = document.querySelector("#user-dropdown");
        const userEmail = document.querySelector("#user-email");
        const userInitials = document.querySelector("#user-initials");
        const avatar = document.querySelector(".avatar");
        avatar.innerHTML = user.username.charAt(0).toUpperCase();

        if(userEmail){
        userEmail.textContent = user.email;
        }
        if(userInitials){
        userInitials.textContent = user.username
            .split(" ")
            .map((name) => name[0])
            .join("");
        }
        if(avatarBtn){
        avatarBtn.addEventListener("click", () => {
            userDropdown.classList.toggle("hidden");
        });
        }
        const logoutBtn = document.querySelector("#logout-btn");
        if(logoutBtn){
        logoutBtn.addEventListener("click", () => {
            handleLogout();
        });
    }
    }
    else {
        const avatar = document.querySelector(".avatar");
        avatar.style.display = "none";
    }
};


initUserAvatar();


let isDropdownOpen = false;

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    isDropdownOpen = !isDropdownOpen;
    dropdownMenu.classList.toggle('hidden', !isDropdownOpen);
}
async function handleLogout() {
    removeUserFromLocalStorage();



    window.location.href = "/frontend/index.html#login-section";
    await initUserAvatar();
    window.location.reload();

}

const displayUser = () => {
    const user = getUserFromLocalStorage();
    if (user) {
        const userDetails = document.querySelector(".userDetails");
        userDetails.innerHTML = `
      <p>${user.username}</p>
      <p>${user.email}</p>
  
      `;

        document.querySelector("#user-btn").style.display = "none";
    }
};
displayUser();

