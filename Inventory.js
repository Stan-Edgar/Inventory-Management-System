const arr = [];

const product = document.querySelector('#product');
const quantity = document.querySelector('#quantity');
const price = document.querySelector('#price');

function calcDiscount(item) {

    if(item.Price > 100) {
        item.Price *= 0.85;
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
        Price: price.value
    }

    calcDiscount(item);
    arr.push(item);

});


Print.addEventListener('click', function() {
    console.log("")
    alert("Check your console :D")
    arr.forEach(item => {console.log(item)})
})

   


