let totalWater = 0;
const glass = document.querySelectorAll('.glas');
const waterText = document.getElementById("waterText");
const reset = document.getElementById("resetbtn")

glass.forEach((data) => {
    data.addEventListener('click', () => {
        totalWater += Number(data.dataset.text);
        updateWater(totalWater)
    });
});

function updateWater(totalWater) {
    waterText.textContent = (totalWater > 0) ? `You Drank ${totalWater}ml water today!` : `Drink Some Water, you need it!`
}

updateWater();

reset.addEventListener('click', () => {
    totalWater = 0;
    updateWater();
})