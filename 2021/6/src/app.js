const priceRangeInput = document.getElementById("priceRange");
const priceDisplay = document.getElementById("priceDisplay");

priceRangeInput.oninput = (ev) => {
    console.log("Price changed", ev);
    updatePriceDisplay(ev.target.value);
};

const updatePriceDisplay = (inputVal) => {
    const displayVal = parseInt(inputVal);

    if (displayVal && !isNaN(displayVal)) {
        displayVal 
    }
    
    priceDisplay.innerText = inputVal;
};