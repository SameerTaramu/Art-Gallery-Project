const registerForm = document.querySelector("#registerForm");

const BACKEND_BASE_URL = "http://localhost:3000";

const handleRegister = async (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document.querySelector("#confirm-password").value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(username)) {
        return alert("Username must only contain letters and spaces.");
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        return alert("Email must be a valid Gmail address (e.g., user@gmail.com).");
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        return alert(
            "Password must be at least 8 characters long, include at least one number, and one special character (!@#$%^&*)."
        );
    }

   
    if (password !== confirmPassword) {
        return alert("Passwords do not match!");
    }

    try {
       
        const registerPayload = {
            name: username,
            email: email,
            password: password,
        };

       
        const res = await axios.post(`${BACKEND_BASE_URL}/api/auth/register`, registerPayload);

        if (res.status === 201) {
            alert("Registered successfully!");
            location.href = "/frontend"; 
        } else {
            alert("Registration failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
};


registerForm.addEventListener("submit", handleRegister);
