const billInput = document.querySelector("bill-input");
const tipBtns = document.getElementsByClassName("button");
const customTipInput = document.querySelector(".custom");
const peopleInput = document.querySelector(".people-input");
// const errorMsg = document.getElementById("error-msg");

const tipAmountPerPerson = document.getElementById("tip-amount");
const totalAmountPerPerson = document.getElementById("total-amount");
console.log(1);
const resetBtn = document.getElementById("reset");

let tipPercent = 0;

for (let btn of tipBtns) {
  btn.addEventListener("click", function () {
    tipPercent = Number.parseInt(btn.textContent);
  });
}

peopleInput.addEventListener("input", function () {
  if (+peopleInput.value === 0) {
    errorMsg.style.visibility = "visible";
    tipAmountPerPerson.textContent = `$0.00`;
    totalAmountPerPerson.textContent = `$0.00`;

    resetBtn.setAttribute("disabled", true); //???//
    resetBtn.style.background = "hsl(183, 64%, 25%)";
  } else {
    errorMsg.style.visibility = "hidden";

    if (customTipInput.value !== "") {
      tipPercent = +customTipInput.value;
    }

    const billAmount = +billInput.value;
    const peopleCount = +peopleInput.value;

    const tip = (billAmount * tipPercent) / 100;
    const total = billAmount + tip;

    tipAmountPerPerson.textContent = `$${(tip / peopleCount).toFixed(2)}`;
    totalAmountPerPerson.textContent = `$${(total / peopleCount).toFixed(2)}`;

    resetBtn.removeAttribute("disabled");
    resetBtn.style.background = "hsl(172, 67%, 45%)";
  }
});

resetBtn.addEventListener("click", function () {
  inputBill.value = inputCustomTip.value = inputPeopleCount.value = "";
  tipAmountPerPerson.textContent = totalAmountPerPerson.textContent = "$0.00";
  tipPercent = 0;
  resetBtn.setAttribute("disabled", true);
  resetBtn.style.background = "hsl(183, 64%, 25%)";
});
