// Function for calculate discount
function calculateDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const priceWithDiscount = (price * (100 - discount)) / 100;

    const result = document.getElementById("ResultP");
    result.innerText = "The amount to pay is $: " + priceWithDiscount;
}

