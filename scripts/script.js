let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.getElementById("search-btn").addEventListener('click', () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
});

document.getElementById("cart-btn").addEventListener('click', () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}