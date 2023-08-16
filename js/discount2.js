document.getElementById('apply-btn-two').addEventListener('click', function(){
    const productPriceElement = document.getElementById('product-actual-price');
    const productPriceString = productPriceElement.innerText;
    const productPrice = parseFloat(productPriceString);
    const discountPriceElement = document.getElementById('discount-price');
    const promoElement = document.getElementById('promo-input');
    const promoString = promoElement.value;
    if(promoString === 'DISC30'){
        const discountParcentage = 30;
        const discountAmmount = (discountParcentage / 100) * productPrice;
        discountPriceElement.innerText = discountAmmount;
    }
    else{
        alert('Wrong coupon. Please use DISC30 to get discount.')
    }

    promoElement.value = '';    
})