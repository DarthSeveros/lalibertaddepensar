function displayCart(){
    var cart = document.getElementById("cart");
    cart.style.filter = "invert(74%) sepia(26%) saturate(835%) hue-rotate(348deg) brightness(101%) contrast(101%)";
    var cart_menu = document.getElementById("cart_menu");
    cart_menu.innerHTML = "No hay nada en tu carrito.";
    cart_menu.style.display = "block";
    cart_menu.style.position = "absolute";
    cart_menu.style.backgroundColor = "#929292";
    cart_menu.style.width = "100px";
    cart_menu.style.margin = "20px auto"
}

function hideCart(){
    var cart_menu = document.getElementById("cart_menu");
    cart_menu.style.display = "none";
    var cart = document.getElementById("cart");
    cart.style.filter = "none";
}