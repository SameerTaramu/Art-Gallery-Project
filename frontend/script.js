
    // let shoppingCart = document.querySelector('.shopping-cart');
    // document.querySelector('#cart-btn').onclick = () => { 
    //     shoppingCart.classList.toggle('active');
    //     loginForm.classList.remove('active');
    //     navbar.classList.remove('active');
    //     uploadForm.classList.remove('active');
    // }

    let loginForm = document.querySelector('.login-form');
    document.querySelector('#user-btn').onclick = () => {
       
        // shoppingCart.classList.remove('active');
        loginForm.classList.toggle('active');
        navbar.classList.remove('active');
        uploadForm.classList.remove('active');
    }

    let navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        // shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        uploadForm.classList.remove('active');
    }

    let uploadForm = document.querySelector('.upload-section');
    document.querySelector('#upload-btn').onclick = () => {
        navbar.classList.remove('active');
        // shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        uploadForm.classList.toggle('active');
    }

    window.onscroll = () => {
        // shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        uploadForm.classList.remove('active');
    }
    document.getElementById('reg-box').onclick = function(event) {
        event.preventDefault(); 
        window.location.href = 'register.html'; 
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        if (window.location.hash === '#login-section') {
            const loginSection = document.getElementById('login-section');
            if (loginSection) {
                loginSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
