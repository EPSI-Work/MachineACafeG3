class Coffee {
    constructor() {
        this.coffeeName = "Coffee";
    }
}

class ClassicCoffee extends Coffee {
    constructor() {
        super();
        this.coffeeName = "Classic Coffee";
    }

    static id = 1;
    static price = 0.4;
}

class Cappuccino extends Coffee {
    constructor() {
        super();
        this.coffeeName = "Cappuccino";
    }

    static id = 2;
    static price = 0.5;
}

class Latte extends Coffee {
    constructor() {
        super();
        this.coffeeName = "Latte";
    }

    static id = 3;
    static price = 0.6;
}

class Espresso extends Coffee {
    constructor() {
        super();
        this.coffeeName = "Espresso";
    }

    static id = 4;
    static price = 0.7;
}

exports.Cappuccino = Cappuccino;
exports.Latte = Latte;
exports.Espresso = Espresso;
exports.ClassicCoffee = ClassicCoffee;