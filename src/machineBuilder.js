const { ClassicCoffee, Cappuccino, Latte, Espresso } = require("./coffee.js");
const { Machine } = require("./machine.js");

class MachineBuilder {
    //Create a new machine with specific paramters

    //This function is the build method of the builder pattern
    build(cupAmount = 10, waterAmount = 10, sugarAmount = 10, stirrerAmount = 10, money = 0) {
        return new Machine(cupAmount, waterAmount, sugarAmount, stirrerAmount, money);
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans.
    static createDefaultMachine() {
        const machine = new MachineBuilder().build();
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Latte());
        machine.fillCoffee(10, new Espresso());
        return machine;
    }

    //This function return a new machine with custom parameters.
    //By default : Cup amount = 10, water amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans.
    static createCustomMachine(cupAmount = 10, waterAmount = 10, stirrerAmount = 10, money = 0) {
        const machine = new MachineBuilder().build(cupAmount, waterAmount, money);
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Latte());
        machine.fillCoffee(10, new Espresso());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans, except for the classic coffee which is empty.
    static createEmptyClassicCoffeeMachine() {
        const machine = new MachineBuilder().build();
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Latte());
        machine.fillCoffee(10, new Espresso());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans, except for the cappuccino which is empty.
    static createEmptyCappuccinoMachine() {
        const machine = new MachineBuilder().build();
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Latte());
        machine.fillCoffee(10, new Espresso());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans, except for the latte which is empty.
    static createEmptyLatteMachine() {
        const machine = new MachineBuilder().build();
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Espresso());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 10, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans, except for the espresso which is empty.
    static createEmptyEspressoMachine() {
        const machine = new MachineBuilder().build();
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Latte());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 0, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans.
    static createEmptySugarMachine() {
        const machine = new MachineBuilder().build(undefined, undefined, 0);
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Espresso());
        machine.fillCoffee(10, new Latte());
        return machine;
    }

    //This function return a new machine with default parameters.
    //Cup amount = 10, water amount = 10, sugar amount = 0, stirrer amount = 10, money = 0
    //All coffee types are filled with 10 coffee beans.
    static createEmptyStirrerMachine() {
        const machine = new MachineBuilder().build(undefined, undefined, undefined, 0);
        machine.fillCoffee(10, new ClassicCoffee());
        machine.fillCoffee(10, new Cappuccino());
        machine.fillCoffee(10, new Espresso());
        machine.fillCoffee(10, new Latte());
        return machine;
    }
}

exports.MachineBuilder = MachineBuilder;