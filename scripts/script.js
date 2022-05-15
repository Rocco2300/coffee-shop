
ready = () => {
    var navbar = document.querySelector('.navbar');
    var searchForm = document.querySelector('.search-form');
    var cartItem = document.querySelector('.cart-items-container');
    
    document.getElementById("search-btn").addEventListener('click', searchClick);
    document.getElementById("cart-btn").addEventListener('click', cartClick);

    var addButtons = document.getElementsByClassName("cart-add");
    for (let i = 0; i < addButtons.length; i++)
    {
        var button = addButtons[i];
        button.addEventListener('click', addCartItem);
    }

    var removeButtons = document.getElementsByClassName("remove-btn");
    for (let i = 0; i < removeButtons.length; i++)
    {
        var button = removeButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

var navbar = document.querySelector('.navbar');
var searchForm = document.querySelector('.search-form');
var cartItem = document.querySelector('.cart-items-container');

searchClick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
};

cartClick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

addCartItem = (e) => {
    var clickedButton = e.target;
    var item = clickedButton.parentElement;
    var title = item.getElementsByClassName("title")[0].innerText;
    console.log(title);
    updateCartTotal();
}

removeCartItem = (e) => {
    var clickedButton = e.target;
    clickedButton.parentElement.remove();
    updateCartTotal();
}

updateCartTotal = () => {
    var cartItemContainer = document.getElementsByClassName("cart-items-container")[0];
    var items = cartItemContainer.getElementsByClassName("cart-item");

    var total = 0;

    for (let i = 0; i < items.length; i++)
    {
        var item = items[i];
        var priceElement = item.getElementsByClassName("price")[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));

        total += price;
    }

    document.getElementsByClassName('total')[0].innerText = 'Total: $' + total;
}