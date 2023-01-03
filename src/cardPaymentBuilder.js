const { CardPayment } = require("./cardPayment.js");

class CardPaymentBuilder {
    //Create a new machine with specific paramters

    //This function is the build method of the builder pattern
    // By default : AccountMoney = 10
    build(accountMoney = 10) {
        return new CardPayment(accountMoney);
    }

    //This function return a new cardPayment with default parameters.
    // By default : AccountMoney = 10
    static createDefaultCardPayment() {
        const cardPayment = new CardPaymentBuilder().build();
        return cardPayment;
    }

    //This function return a new cardPayment with custom parameters.
    //By default : AccountMoney = 10
    static createCustomCardPayment(accountMoney = 10) {
        const cardPayment = new CardPaymentBuilder().build(accountMoney);
        return cardPayment;
    }

    //This function return a new cardPayment with empty accountMoney.
    //By default : AccountMoney = 0
    static createEmptyCardPayment() {
        const cardPayment = new CardPaymentBuilder().build(0);
        return cardPayment;
    }
}

exports.CardPaymentBuilder = CardPaymentBuilder;