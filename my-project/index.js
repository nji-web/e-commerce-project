const image= document.getElementById("image")
const priceCent = document.getElementById("priceCent")
const Container = document.querySelector(".container")

const price = Math.floor(Math.random(0)* 90).toFixed(2)
const details = [
    {
        id:'123',
        image:'https://media.istockphoto.com/id/2234307495/photo/a-patent-leather-bag-and-shoes-in-a-boutique-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=fUPPI4lJMHeX0CF8JznpHN0uC7jcSxu9QXBmiNm_aR4=',
        name:'classic black bag',
        price: '$60',
        
    },
     {
         id:'122',
        image:'https://media.istockphoto.com/id/1155396642/photo/white-sport-shoes-and-small-bag.webp?a=1&b=1&s=612x612&w=0&k=20&c=O-nCXND7QTujYITuVUrr5HP3iqdd8vFqmw7ZPPlF-A4=',
        name:'classic white bag',
        price: '$590'
    },
     {
         id:'102',
        image:'https://media.istockphoto.com/id/626234448/photo/luxury-handbags.jpg?s=612x612&w=0&k=20&c=Zz4OsUc67DLv5wLftwYd1_NeYmQmb4RCBuaCVttpM4w=',
        name:'GenZ bag',
        price: '$380'
    },
     {
        id:'124',
        image:'https://media.istockphoto.com/id/1288052530/photo/still-life-of-personal-accessories-for-gift-ideas-isolated-on-green-background.jpg?s=612x612&w=0&k=20&c=4GZmKIMpuWNtyc7fiLNQ_oVbyGcG8EW_2tmqtyMe2mo=',
        name:'complet-collection',
        price: '$320'
    },
     {
        id:'155',
        image:'https://media.istockphoto.com/id/1073751750/photo/girl-in-boots-with-high-heels-and-with-a-bag-in-his-hand.jpg?s=612x612&w=0&k=20&c=6mGl5kuLPY3UYyB7Qla3bM3ptVvFhVDUz8Z3eSkrQdw=',
        name:'high black',
        price: '$430'
    },
     {
        id:'166',
        image:'https://media.istockphoto.com/id/2262937464/photo/technician-checks-the-battery-pack-of-an-electric-car-at-a-service-center.jpg?s=612x612&w=0&k=20&c=KTVa4p5R9ygSSVnZtgRmHgSTGhybTwR8mGzB3iO52qo=',
        name:'super-computers',
        price: '$1000'
    },
     {
        id:'167',
        image:'https://media.istockphoto.com/id/2263767671/photo/generic-modern-city-suv-speeding-on-the-street.jpg?s=612x612&w=0&k=20&c=PXl6buS059rpQJc1pQPrVavunON_LGfAx6TMD2yknQI=',
        name:'votex',
        price: '$65'
    },
     {
        id:'178',
        image:'https://media.istockphoto.com/id/2277263161/photo/beautiful-young-brunette-in-floral-dress-and-sunglasses-leaning-on-her-moped-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=P-JNVhO8FDK7quc8q7Y77bo8qYNnv3PHvvv3zSBWsKo=',
        name:'check prof',
        price: '$500'
    },
     {
        id:'125',
        image:'https://media.istockphoto.com/id/2160058640/photo/dog-animal-and-play-with-shoes-in-living-room-for-guilty-mess-by-biting-sneaker-explore-or.jpg?s=612x612&w=0&k=20&c=pPfxNil89JqGiD1oLkvhnEgDhjiOxzYOO2-WP6qoWj0=',
        name:'All-stars',
        price: '$90'
    },
     {
        id:'133',
        image:'https://media.istockphoto.com/id/2160058640/photo/dog-animal-and-play-with-shoes-in-living-room-for-guilty-mess-by-biting-sneaker-explore-or.jpg?s=612x612&w=0&k=20&c=pPfxNil89JqGiD1oLkvhnEgDhjiOxzYOO2-WP6qoWj0=',
        name:'drego',
        price: '$400'
    },
     {
        id:'160',
        image:'https://media.istockphoto.com/id/2160058640/photo/dog-animal-and-play-with-shoes-in-living-room-for-guilty-mess-by-biting-sneaker-explore-or.jpg?s=612x612&w=0&k=20&c=pPfxNil89JqGiD1oLkvhnEgDhjiOxzYOO2-WP6qoWj0=',
        name:'mud-shoe',
        price: '$300'
    },
     {
        id:'100',
        image:'https://media.istockphoto.com/id/2226993828/photo/isolated-classic-soccer-ball-sport-equipment.jpg?s=612x612&w=0&k=20&c=jHb8ocIt3zNd0xyQgj_rsEaQcHvIxOUHvL4ObFrTe18=',
        name:'football',
        price: '$500'
    },
     {
        id:'455',
        image:'https://media.istockphoto.com/id/2230187758/photo/white-washing-machine-isolated-on-a-white-background-front-view-of-modern-washer-machine.jpg?s=612x612&w=0&k=20&c=uEe3GZWv6VoZa3nVANBKZHyJxUZ_qnEzZ5oppEKssqE=',
        name:'washing-maching',
        price:'$45'
    },
     {
        id:'555',
        image:'https://media.istockphoto.com/id/2257555297/photo/modern-american-single-family-house-exterior-3d-illustration-isolated.jpg?s=612x612&w=0&k=20&c=6IWi7fmJmnb9oYTb82F59Up4hFg_aSV3jyL4OyFcdoc=',
        name:' ploke',
        price: '$100'
    },
     {
        id:'687',
        image:'https://media.istockphoto.com/id/2233679821/photo/fashionable-young-woman-walking-in-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=cUm5PSKfRgbPIVSK623xK6uzzUKJtBmv9upHyXGAfJk=',
        price: "$50",
        name:'lenses(black)'
    },
     {
        id:'999',
        image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheVN0YXRpb258ZW58MHx8MHx8fDA%3D',
        price: '$70',
        name:'gaming console'
    },
     {
        id:'888',
        image:'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYXlTdGF0aW9ufGVufDB8fDB8fHww',
        price: "$2400",
        name:'playStation'
    },
]
 const page = details.map((detail)=>{
  return(
      ` 
    <div key=${detail.id} class="image-details-container">
    
    <div class="image-section">
                <img  id="image"  src=${detail.image} >
           </div>
           <div class="cart-quantity">
                <small class="name">${detail.name}</small>
                     
                    <p id="priceCent" class="price">${detail.price}</p>
                    <button class="add-cart">Add To Card</button>
           </div>
        </div>
        
        `
   
  )
 })
   
Container.innerHTML = page;

const cartOPen = document.querySelector(".club")
const cart = document.querySelector(".cart")
const cartClose = document.querySelector("#cart-close")

cartOPen.addEventListener("click", ()=>{
    cart.classList.add("active")
})
cartClose.addEventListener("click", ()=>{
    cart.classList.remove("active")
})

const addCartButtons = document.querySelectorAll(".add-cart")

addCartButtons.forEach(button =>{
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".image-details-container")
        addToCart(productBox)
    })
})

const cartContent = document.querySelector(".cart-content")
const addToCart = productBox =>{
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".name").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

// Stop if the same cart is added more than onces
   const cartItems = cartContent.querySelectorAll(".card-product-title")
   for(let item of cartItems){
    if(item.textContent === productTitle){
        alert("This item is already in the cart")
        return;
    }
   }

    const cartBox = document.createElement("div")
    cartBox.classList.add("cart-box");
    cartBox.innerHTML=`
    

             <img src="${productImgSrc}" alt="cart-img">
    
             <div class="cart-detail">

            <h2 class="card-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quant">

                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="fa-solid fa-trash cart-remove"></i>
    
    `;

    cartContent.appendChild(cartBox)

    //remove cart product
    cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
        cartBox.remove()
        updateCartCount(-1)
        updateTotalPrice()
    })

    // add or decrease quantity
    cartBox.querySelector(".cart-quant").addEventListener("click", event =>{
        const  numberElement = cartBox.querySelector(".number")
        const decrementButton =cartBox.querySelector("#decrement")
        let quantity = numberElement.textContent


        if(event.target.id === "decrement" && quantity > 1){
            quantity--;
            if(quantity === 1){
                decrementButton.style.color = "#999"
            }
        }else if(event.target.id === "increment"){
            quantity++;
            decrementButton.style.color ="#333"
        }

        numberElement.textContent = quantity;
        updateTotalPrice()
    })
    updateCartCount(1)
    updateTotalPrice();
}

// calculating the total price

const updateTotalPrice = () =>{
    const totalPriceElement = document.querySelector(".total-price")
    const cartBoxes = cartContent.querySelectorAll(".cart-box")
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        const priceElement = cartBox.querySelector(".cart-price")
        const quantityElement = cartBox.querySelector(".number")
        const price = priceElement.innerHTML.replace("$", "");
        const quantity = quantityElement.innerHTML
        total += price * quantity
    })
    totalPriceElement.innerHTML = `$${total}`
}

// to show a small icon at the top
let cartItemCount = 0;
const updateCartCount = change =>{
    const cartItemCountBadge = document.querySelector(".cart-item-count")
    cartItemCount += change;
    if(cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount
    }else{
        cartItemCountBadge.style.visibility ="hidden"
        cartItemCountBadge.textContent = "";
    }
}

// buying button
const buyNowButton = document.querySelector(".btn-buy")
buyNowButton.addEventListener("click", ()=> {
    const cartBoxes = cartContent.querySelectorAll(".cart-box")
    if(cartBoxes.length === 0){
        alert("Your cart is empty.please add items to your cart before buying")
        return;
    }
    cartBoxes.forEach(cartBox => cartBox.remove())
    cartItemCount = 0;
    updateCartCount(0)
    updateTotalPrice()
    alert("Thanks you for your purchase")
})