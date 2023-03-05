
let carts = JSON.parse (localStorage.getItem("carts")) || [];
console.log(carts);

for (let cart of carts) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("img-container");
    img.setAttribute("src", cart.image);
    card.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("name");
    name.innerText = cart.name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b> Price : </b>" + cart.price;
    container.appendChild(price);

    let quantity = document.createElement("h6");
    quantity.innerHTML = "<b> Quantity : </b>" + cart.quantity;
    container.appendChild(quantity);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function AddToCart(name) {
    for (let cart of carts) { 
        if (name == cart.name) {
            cart.quantity +=1;
        }
    }
    alert(name);
    console.log(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
}
