class CardPayment {
    constructor(accountMoney) {
        this.accountMoney = accountMoney;
    }
    pay(amount) {
        if (this.accountMoney - amount >= 0) {
            this.accountMoney -= amount;
            return true;
        }
        return false;
    }

    getAccountMoney() {
        return this.accountMoney;
    }
}

exports.CardPayment = CardPayment;