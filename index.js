// fake Data for products

const products = [
{name:"PC" , price: 1500 , quantity:0 , liked:false,  disabled:true},
{name:"velo" , price: 5000 , quantity:0 , liked:false,disabled:true},
{name:"Smart Phone" , price: 200 , quantity:0 , liked:false ,disabled:true},
{name:"voiture" , price: 13000 , quantity:0 , liked:false, disabled:true},
]


let productsNbr = 0 ;

let btn = document.getElementsByClassName("addBtn");

const totalProducts = document.getElementById("totalNumber");
//selection de l'element du panier

const cart = document.getElementById("cart");

// selection du prix total

const totalPriceElement = document.getElementById("totalPrice");

//fonction pour afficher les articles dans le panier

function displayCart(){
    if (cart){
        cart.innerHTML = "";
    }
    let totalPrice = 0 ;

    products.forEach((element,index)=>{
        const cartProduct = document.createElement("div");
        cartProduct.className = "cartProduct";
        cartProduct.innerHTML = `
        <span> ${element.name} </span>
        <span> ${element.price} </span>
        <span> ${element.quantity} </span>
        <button onclick="decrement(${index})"> - </button>
        <span>${element.quantity} </span>
        <button onclick="increment(${index})"> + </button>
        <button class="addBtn" onclick="addToCart(); disableButton(${index});" > add to cart </button>
        <button onclick="remove(${index})"> Supprimer </button>
        <button 
        class="heartButton${element.liked ? 'liked' : ''} "
        onclick="toggleLike(${index})"> &#10084 </button>
        `;

        cart?.appendChild(cartProduct);
        totalPrice += element.price * element.quantity;
    })
    
    totalPriceElement.textContent = totalPrice ;
}
displayCart()

//increment function

function increment(index) {
    if (products[index].quantity < 99) { 
        products[index].quantity++;
    }
    displayCart(); 
}
//decrement function

function decrement(index) {
    if (products[index].quantity > 0) {
        products[index].quantity--;
    }
    displayCart(); 
}

//heartButton function
function toggleLike(index) {
    products[index].liked = !products[index].liked;

    const heartButton = document.querySelectorAll('.heartButton')[index];

    if (products[index].liked) {
        heartButton.classList.add('liked');
    } else {
        heartButton.classList.remove('liked');
    }
}

//supprimer

function remove(index) {
    products.splice(index, 1);
    displayCart();
}

//nombre d'articles total

function addToCart () { 
    productsNbr ++ ;
    totalProducts.textContent = productsNbr ;
    btn[index].disabled = true;

}




