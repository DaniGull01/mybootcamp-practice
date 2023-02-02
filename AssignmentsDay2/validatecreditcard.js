function validateCreditCard(cardNumber) {
    // Remove any non-digit characters from the card number
    cardNumber = cardNumber.replace(/\D/g, '');
  
    // Split the card number into individual digits
    let digits = cardNumber.split('').map(Number);
  
    // Reverse the order of the digits
    digits = digits.reverse();
  
    // Double every other digit
    for (let i = 0; i < digits.length; i++) {
      if (i % 2 === 1) {
        digits[i] *= 2;
        if (digits[i] > 9) {
          digits[i] -= 9;
        }
      }
    }
  
    // Sum all the digits
    let sum = digits.reduce((a, b) => a + b, 0);
  
    // Check if the sum is divisible by 10
    return sum % 10 === 0;
  }

  let cardNumber = "4111 1111 1111 1111";
if (validateCreditCard(cardNumber)) {
  console.log("Valid credit card number");
} else {
  console.log("Invalid credit card number");
}