const priceRangeInput = document.getElementById("priceRange");
const priceDisplay = document.getElementById("priceDisplay");

priceRangeInput.oninput = (ev) => {
    console.log("Price changed", ev);
    updatePriceDisplay(ev.target.value);
};

const updatePriceDisplay = (inputVal) => {
    let displayVal = parseInt(inputVal);

    if (displayVal && !isNaN(displayVal)) {
        displayVal /= 100;
        priceDisplay.innerText = displayVal;
    }
};