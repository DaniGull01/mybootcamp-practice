class Payment {
    constructor(amount) {
      this.amount = amount;
    }
  
    paymentDetails() {
      return `The payment amount is $${this.amount}.`;
    }
  }
  
  class CashPayment extends Payment {
    constructor(amount) {
      super(amount);
    }
  
    paymentDetails() {
      return `This is a cash payment of $${this.amount}.`;
    }
  }
  
  class CreditCards {
    constructor(name, expiration, cardNumber) {
      this.name = name;
      this.expiration = expiration;
      this.cardNumber = cardNumber;
    }
  }
  
  class CardPayment extends Payment {
    constructor(amount, creditCard) {
      super(amount);
      this.creditCard = creditCard;
    }
  
    paymentDetails() {
      return `This is a card payment of $${this.amount} with card number **** **** **** ${this.creditCard.cardNumber.slice(-4)}, owned by ${this.creditCard.name}, and expiration date ${this.creditCard.expiration}.`;
    }
  }
  
  const payments = [
    new CashPayment(100),
    new CashPayment(50),
    new CardPayment(200, new CreditCards("Rana Adnan", "12/24", "1234 5678 9012 3456")),
    new CardPayment(150, new CreditCards("Rana Rehan", "01/25", "2345 6789 0123 4567"))
  ];
  
  for (const payment of payments) {
    console.log(payment.paymentDetails());
  }
  