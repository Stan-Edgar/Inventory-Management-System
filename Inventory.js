const arr = [];

const product = document.querySelector('#product');
const quantity = document.querySelector('#quantity');
const price = document.querySelector('#price');

const form = document.querySelector("#form");
const error = document.querySelector("#error")
  

function eReset() {
    error.innerHTML = "";
    error.className = "";
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

})

function calcDiscount(item) {

    if(item.Total > 100) {
        item.Discount =  item.Total * 0.15;
    }

}

const Add = document.querySelector("#Add");
const Print = document.querySelector("#print");

Add.addEventListener('click', function() {

    
    if (product.value === "" || quantity.value === "" || price.value === "") {
        error.innerHTML = "Please Fill in empty fields!!!";
        error.className += "bg-[#dc3545] text-white font-bold p-5"
        return
    }

    eReset();


    let item = {
        Product: product.value,
        Quantity: quantity.value,
        Price: price.value,
        Total: price.value * quantity.value,
        Discount: 0,
        Final: 0
    }

    
    calcDiscount(item);
    item.Final = item.Total - item.Discount;
    arr.push(item);

});


Print.addEventListener('click', function() {

    if (product.value === "" || quantity.value === "" || price.value === "" ) {
        error.innerHTML = "Please Fill in empty fields!!!";
            error.className += "bg-[#dc3545] text-white font-bold p-5"
        return
    } else if (arr.length <= 0) {
        error.innerHTML = "Please add a product first!";
        error.className += "bg-[#dc3545] text-white font-bold p-5"
        return
    };

    eReset();

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

   


