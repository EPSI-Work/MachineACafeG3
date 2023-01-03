const { Cappuccino, Latte, Espresso, ClassicCoffee } = require("./coffee");

class Machine {
    constructor(cupAmount, waterAmount, sugarAmount, stirrerAmount, money) {
        this.waterAmount = waterAmount;
        this.cupAmount = cupAmount;
        this.sugarAmount = sugarAmount;
        this.stirrerAmount = stirrerAmount;
        this.coffees = [];
        this.money = money;
    }

    //Function to fill the machine with the different coffee types
    fillCoffee(coffeeAmount, coffeType) {
        for (let i = 0; i < coffeeAmount; i++) {
            this.coffees.push(coffeType);
        }
    }

    pay(money, sugar = 0) {
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
        if (money == ClassicCoffee.price) {
            //Check if there is enough coffee of this type in the machine
            if (this.checkEnoughCoffee("Classic Coffee")) {
                this.money += money;
                this.removeCoffee("Classic Coffee");
                this.waterAmount -= 1;
                this.cupAmount -= 1;
                this.sugarAmount -= sugar;
                return 0;
            } else {
                return money;
            }
        }
        if (money == Cappuccino.price) {
            //Check if there is enough coffee of this type in the machine
            if (this.checkEnoughCoffee("Cappuccino")) {
                this.money += money;
                this.removeCoffee("Cappuccino");
                this.waterAmount -= 1;
                this.cupAmount -= 1;
                this.sugarAmount -= sugar;
                return 0;
            } else {
                return money;
            }
        }
        if (money == Latte.price) {
            //Check if there is enough coffee of this type in the machine
            if (this.checkEnoughCoffee("Latte")) {
                this.money += money;
                this.removeCoffee("Latte");
                this.waterAmount -= 1;
                this.cupAmount -= 1;
                this.sugarAmount -= sugar;
                return 0;
            } else {
                return money;
            }
        }
        if (money == Espresso.price) {
            //Check if there is enough coffee of this type in the machine
            if (this.checkEnoughCoffee("Espresso")) {
                this.money += money;
                this.removeCoffee("Espresso");
                this.waterAmount -= 1;
                this.cupAmount -= 1;
                this.sugarAmount -= sugar;
                return 0;
            } else {
                return money;
            }
        }

        return money;
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

    //Function to get the number of coffees of a specific type in the machine
    getCoffeeAmount(coffeeType) {
        return this.coffees.filter((coffee) => coffee.coffeeName == coffeeType)
            .length;
    }

    getSugarAmount() {
        return this.sugarAmount;
    }

    getCoffee() {
        return this.coffee;
    }
    getMoney() {
        return this.money;
    }
}

exports.Machine = Machine;