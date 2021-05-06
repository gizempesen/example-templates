//show cart

(function(){
    const cartInfo = document.getElementById('cart-Info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart'); //toggle: what class we looking for
    });
})();

// add items to the cart 

(function(){
 
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            //console.log(event,target)   //tıkladığında ürünü consola yazdırma

            if (event.target.parentElement.classList.contains("store-item-icon")){
                console.log(target.parentElement.previousElementSibling.src);
            }
        });

    });
})();