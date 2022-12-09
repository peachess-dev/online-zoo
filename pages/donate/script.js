// make another amount field equal to amount field value

const amount = document.querySelectorAll(".amount");
const anotherAmount = document.querySelector("#anotheramount");

for (let i = 0; i < amount.length; i++) {
  amount[i].addEventListener("click", () => {
    anotherAmount.value = `${amount[i].value}`;
  });
}

// make corresponding radio button checked when amount is matching

anotherAmount.addEventListener("keyup", duplicateAmount);

function duplicateAmount() {
  for (let i = 0; i < amount.length; i++) {
    if (anotherAmount.value === amount[i].value) {
      amount[i].checked = true;
    }
  }
}

// make $100 checked on window load

const amount100 = document.querySelectorAll(".amount")[5];

window.onload = () => {
  amount100.checked = true;
  anotherAmount.value = amount100.value;
};
