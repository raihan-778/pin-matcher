console.log("common js is connected");

function getPin() {
  const pin = generatePin();
  console.log(pin);
  const pinString = pin + "";
  console.log(pinString);
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const creatPin = Math.round(Math.random() * 10000);
  return creatPin;
}
