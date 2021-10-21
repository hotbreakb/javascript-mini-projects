const count = document.querySelector(".count");
const btns = document.querySelectorAll("button");
const unit = document.querySelector(".unit");

let value = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let numberUnit = parseInt(unit.value, 10);

        // if unit is black
        if (isNaN(numberUnit)) {
            numberUnit = 1;
        }

        // calcurate
        if (e.currentTarget.classList.contains("decrease")) {
            value -= numberUnit;
        }
        else if (e.currentTarget.classList.contains("increase")) {
            value += numberUnit;
        }
        else {
            value = 0;
        }

        // change font color by value
        if (value < 0) {
            count.style.color = 'red';
        }
        else if (value > 0) {
            count.style.color = 'green';
        }
        else {
            count.style.color = 'black';
        }

        count.textContent = value;
    });
});

function inputNumberLengthOne(e) {

    if (e.value.length > 0) {
        e.value = e.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '');
    }
}