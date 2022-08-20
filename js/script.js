document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = getPin();
  const pinGenerateElement = document.getElementById("pin-generate-input");
  pinGenerateElement.value = pin;
});

document
  .getElementById("calc-event")
  .addEventListener("click", function (event) {
    let eventTarget = event.target.innerText;
    let pinInput = document.getElementById("pin-input");
    const previousTarget = pinInput.value;
    if (isNaN(eventTarget)) {
      if (eventTarget === "C") {
        pinInput.value = "";
      } else if (eventTarget === "<") {
        const digit = previousTarget.split("");
        digit.pop();
        const remainingDigit = digit.join("");
        pinInput.value = remainingDigit;
      }
    } else {
      const newTarget = previousTarget + eventTarget;
      pinInput.value = newTarget;
    }
  });

document.getElementById("pin-verify").addEventListener("click", function () {
  const displayPinField = document.getElementById("pin-generate-input");
  const displayPin = displayPinField.value;

  const typedPinField = document.getElementById("pin-input");
  const typedPin = typedPinField.value;

  //capture notify element
  const pinSuccess = document.getElementById("match-pin");
  const pinFailure = document.getElementById("mismatch-pin");
  if (displayPin === typedPin) {
    console.log("correct pin");
    pinSuccess.style.display = "block";
    pinFailure.style.display = "none";
  } else {
    console.log("incorrect pin");
    pinSuccess.style.display = "none";
    pinFailure.style.display = "block";
  }
});
