const arr = [];

const product = document.querySelector('#product');
const quantity = document.querySelector('#quantity');
const price = document.querySelector('#price');

function calcDiscount(item) {

    if(item.Total > 100) {
        item.Discount =  item.Total * 0.15;
    }

}

const Add = document.querySelector("#Add");
const Print = document.querySelector("#print");

Add.addEventListener('click', function() {

    if (product.value === "" || quantity.value === "" || price.value === "") {
        alert("Please Fill in empty fields")
        return
    }

    let item = {
        Product: product.value,
        Quantity: quantity.value,
        Price: price.value,
        Total: price.value * quantity.value,
        Discount: 0,
        Final: (price.value * quantity.value) - ((price.value * quantity.value) * 0.15)
    }

    calcDiscount(item);
    arr.push(item);

});


Print.addEventListener('click', function() {
    console.log("")
    alert("Check your console :D")
    arr.forEach(item => {
        console.log(`
        Product: ${item.Product} 
        Quantity: ${item.Quantity}
        Unit Price: ${item.Price} 
        Total: ${item.Total}
        Discount: ${item.Discount} 
        Final Price: ${item.Final}`)
       
    })
})

   


