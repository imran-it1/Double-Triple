document.getElementById('apply-btn').addEventListener('click', function(){
    const priceElement = document.getElementById('price');
    const priceString = priceElement.innerText;
    const price = parseFloat(priceString);

    const discountParcentage = 30;
    const discountAmmount = (discountParcentage / 100) * price;

    const previousPrice = document.getElementById('actual-price');
    previousPrice.innerText = discountAmmount;
})