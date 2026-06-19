console.log("Welcome to Mini Shopping Cart !!")

let cart = []
var total = 0
const products = [
    {
        'Name':'T-shirt',
        'Price': 674,
        'Category': 'Clothing',
        'Rating': 4.8 ,
        'isAvailable': true
    },
    {
        'Name':'Watch',
        'Price': 350,
        'Category': 'Accessories',
        'Rating': 4.0 ,
        'isAvailable': true
    },
    {
        'Name':'Jeans',
        'Price': 1600,
        'Category': 'Clothing',
        'Rating': 4.5 ,
        'isAvailable': true
    },
    {
        'Name':'Kurti',
        'Price': 650,
        'Category': 'Clothing',
        'Rating': 3.9 ,
        'isAvailable': true
    },
    {
        'Name':'Earrings',
        'Price': 100,
        'Category': 'Accessories',
        'Rating': 4.2 ,
        'isAvailable': false
    }
]

function showProducts(products){
    console.table(products)
}

function addToCart(item){
    if(item.isAvailable){
        total += item.Price
        cart.push(item)
        return true
    }
    return false
}

function billing(total){
    console.log("<-----------Billing----------->")

    const taxPercent = 18
    const discountPercent = 20
    let discount = 0
    let tax = (taxPercent/100)*total

    console.log("Amount \t\t\t:",total)
    console.log(`Tax(${taxPercent}%)  \t\t:${tax.toFixed(3)}`)
    console.log("--------------------------------")
    console.log(`Including Tax   :${(total+tax).toFixed(3)}`)
    if(total>=1000){
        discount = total*(discountPercent/100)
    }
    console.log("Discount \t\t:",discount)
    console.log("---------------------------------")
    console.log(`Total Amount  \t:${(total+tax-discount).toFixed(3)}`)
}

console.log("<----------------Products----------------->")
showProducts(products)
for(let i=0;i<products.length;i+=2){
    if(addToCart(products[i])){
        console.log("Item added successfully !!")
        console.log("<---------------Cart------------------>")
        showProducts(cart)
    }
    else{
        console.log("Item is out of stock!!")
    }
    console.log("Your cart is with",total,"$")
}
console.log("\nProcessing order...");

setTimeout(() => {
    billing(total)
    console.log("Order Confirmed!");
}, 2000);