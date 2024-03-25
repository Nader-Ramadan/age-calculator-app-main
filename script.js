let nowDay = Date.now();
let inputs = document.querySelectorAll(".container input");
let submitBtn = document.querySelector("button");
let eCont = document.querySelectorAll(".error-msg");
let ansCont = document.querySelectorAll("span");
let form = document.querySelector("form");
let eMsg = [
    "This field is required",
    "Must be a valid day",
    "Must be a valid month",
    "Must be in the past",
];
console.log(inputs);
submitBtn.addEventListener('click', () => {
    inputs.forEach((input, i) => {
        if (+input.value === 0) {
            eCont[i].innerHTML = eMsg[0];
        }
        else if (inputs[0].value > 31) {
            eCont[0].innerHTML = eMsg[1];
            if (inputs[1].value > 12) {
                eCont[1].innerHTML = eMsg[2];
                if (inputs[2].value > nowDay.getUTCFullYear()) {
                    eCont[2].innerHTML = eMsg[3];
                }
            }
        }
        else {
            eCont.forEach((cont) => {
                cont.innerHTML = "";
            });
            let birthday = `${inputs[0].value}-${inputs[1].value}-${inputs[2].value}`;
            let birthdayObj = new Date(birthday);
            let ageDiff = Date.now() - birthdayObj;
            let result = new Date(ageDiff);
            ansCont[0].innerHTML = result.getUTCFullYear() - 1970;
            ansCont[1].innerHTML = result.getUTCMonth();
            ansCont[2].innerHTML = result.getUTCDay() - 1;
        }
    })
})