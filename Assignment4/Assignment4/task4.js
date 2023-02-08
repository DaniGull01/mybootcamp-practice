class BankAccount {
    #accountId;
    #accountTitle;
    #balance;
    #emailID;
  
    constructor(accountId, accountTitle, balance, emailID) {
      this.#accountId = accountId;
      this.#accountTitle = accountTitle;
      this.#balance = balance;
      this.#emailID = emailID;
    }
  
    getAccountId() {
      return this.#accountId;
    }
  
    setAccountId(accountId) {
      this.#accountId = accountId;
    }
  
    getAccountTitle() {
      return this.#accountTitle;
    }
  
    setAccountTitle(accountTitle) {
      this.#accountTitle = accountTitle;
    }
  
    getBalance() {
      return this.#balance;
    }
  
    setBalance(balance) {
      this.#balance = balance;
    }
  
    getEmailID() {
      return this.#emailID;
    }
  
    setEmailID(emailID) {
      this.#emailID = emailID;
    }
  
    withdrawAmount(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Amount withdrawn: ${amount}`);
        console.log(`Remaining balance: ${this.#balance}`);
      } else {
        console.log("Insufficient balance");
      }
    }
  
    depositAmount(amount) {
      this.#balance += amount;
      console.log(`Amount deposited: ${amount}`);
      console.log(`Current balance: ${this.#balance}`);
    }
  }
  const account = new BankAccount(1, "John Doe", 1000, "johndoe@example.com");

  account.withdrawAmount(500);
  // Output:
  // Amount withdrawn: 500
  // Remaining balance: 500
  
  account.depositAmount(300);
  // Output:
  // Amount deposited: 300
  // Current balance: 800
    