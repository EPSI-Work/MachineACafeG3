const { Cappuccino, Latte, Espresso, ClassicCoffee } = require("./coffee");

class Machine {
    constructor(
        cupAmount,
        waterAmount,
        sugarAmount,
        stirrerAmount,
        money,
        cardPayment
    ) {
        this.waterAmount = waterAmount;
        this.cupAmount = cupAmount;
        this.sugarAmount = sugarAmount;
        this.stirrerAmount = stirrerAmount;
        this.coffees = [];
        this.money = money;
        this.cardPayment = cardPayment;
    }

    //Function to fill the machine with the different coffee types
    fillCoffee(coffeeAmount, coffeType) {
        for (let i = 0; i < coffeeAmount; i++) {
            this.coffees.push(coffeType);
        }
    }

    pay(coffeeId = 0, money = 0, card = false, sugar = 0, water = 0) {
        //Check if there is enough water
        if (this.waterAmount <= 0) {
            return money;
        }
        //Check if there is enough cups
        if (this.cupAmount <= 0) {
            return money;
        }
        //Check if there is enough sugar
        if (this.sugarAmount < sugar) {
            return money;
        }
        //Check if there is still coffee
        if (this.coffees.length <= 0) {
            return money;
        }

        //Check if stirrer is needed
        if (sugar > 0) {
            if (this.stirrerAmount > 0) {
                this.stirrerAmount -= 1;
            }
        }

        //Check if second dose of water is needed
        if (water > 0) {
            this.waterAmount -= 1;
        }

        switch (coffeeId) {
            case ClassicCoffee.id:
                // Check if there is enough coffee
                if (this.checkEnoughCoffee("Classic Coffee")) {
                    //Determine if the payment is made with card or money

                    if (card) {
                        //Check if the payment is successful. If it is, cook the coffee.
                        if (this.cardPayment.pay(ClassicCoffee.price)) {
                            this.cookCoffee("Classic Coffee", sugar);
                            return 0;
                        }
                        return money;
                    }

                    if (ClassicCoffee.price <= money) {
                        this.money += money;
                        this.cookCoffee("Classic Coffee", sugar);
                        return 0;
                    }

                    return money;
                }
                return money;

            case Cappuccino.id:
                // Check if there is enough coffee
                if (this.checkEnoughCoffee("Cappuccino")) {
                    //Determine if the payment is made with card or money

                    if (card) {
                        //Check if the payment is successful. If it is, cook the coffee.
                        if (this.cardPayment.pay(ClassicCoffee.price)) {
                            this.cookCoffee("Cappuccino", sugar);
                            return 0;
                        }
                        return money;
                    }

                    if (ClassicCoffee.price <= money) {
                        this.money += money;
                        this.cookCoffee("Cappuccino", sugar);
                        return 0;
                    }

                    return money;
                }
                return money;

            case Latte.id:
                // Check if there is enough coffee
                if (this.checkEnoughCoffee("Latte")) {
                    //Determine if the payment is made with card or money

                    if (card) {
                        //Check if the payment is successful. If it is, cook the coffee.
                        if (this.cardPayment.pay(ClassicCoffee.price)) {
                            this.cookCoffee("Latte", sugar);
                            return 0;
                        }
                        return money;
                    }

                    if (ClassicCoffee.price <= money) {
                        this.money += money;
                        this.cookCoffee("Latte", sugar);
                        return 0;
                    }

                    return money;
                }

                return money;

            case Espresso.id:
                // Check if there is enough coffee
                if (this.checkEnoughCoffee("Espresso")) {
                    //Determine if the payment is made with card or money

                    if (card) {
                        //Check if the payment is successful. If it is, cook the coffee.
                        if (this.cardPayment.pay(ClassicCoffee.price)) {
                            this.cookCoffee("Espresso", sugar);
                            return 0;
                        }
                        return money;
                    }

                    if (ClassicCoffee.price <= money) {
                        this.money += money;
                        this.cookCoffee("Espresso", sugar);
                        return 0;
                    }

                    return money;
                }
                return money;

            default:
                return money;
        }
    }

    //Function to check if there is enough coffee of a specific type in the machine
    checkEnoughCoffee(coffeeType) {
        return this.getCoffeeAmount(coffeeType) > 0;
    }

    //Function to remove only one coffee item of a specific type from the machine
    removeCoffee(coffeeType) {
        let coffeeOfTheType = this.coffees.filter(
            (coffee) => coffee.coffeeName == coffeeType
        );
        //Remove the last coffee of the type
        coffeeOfTheType.pop();
        //Replace the old coffee array with the new one
        this.coffees = this.coffees
            .filter((coffee) => coffee.coffeeName != coffeeType)
            .concat(coffeeOfTheType);
    }

    cookCoffee(coffeeType, sugar) {
        this.removeCoffee(coffeeType);
        this.waterAmount -= 1;
        this.cupAmount -= 1;
        this.sugarAmount -= sugar;
    }

    //Function to get the number of coffees of a specific type in the machine
    getCoffeeAmount(coffeeType) {
        return this.coffees.filter((coffee) => coffee.coffeeName == coffeeType)
            .length;
    }

    getWaterAmount() {
        return this.waterAmount;
    }

    getSugarAmount() {
        return this.sugarAmount;
    }

    getStirrerAmount() {
        return this.stirrerAmount;
    }

    getCoffee() {
        return this.coffee;
    }

    getMoney() {
        return this.money;
    }
}

exports.Machine = Machine;