const { MachineBuilder } = require("../src/machineBuilder.js");

test("QUAND on insère 40 cts ALORS un café classique coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const money = machine.pay(0.4);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
});
test("QUAND on insère 50 cts ALORS un café cappucino coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Cappuccino");
    const money = machine.pay(0.5);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Cappuccino")).toBe(coffeeNumber - 1);
});
test("QUAND on insère 60 cts ALORS un café latte coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Latte");
    const money = machine.pay(0.6);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Latte")).toBe(coffeeNumber - 1);
});
test("QUAND on insère 70 cts ALORS un café espresso coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Espresso");
    const money = machine.pay(0.7);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Espresso")).toBe(coffeeNumber - 1);
});

test("QUAND on insère 40 cts et qu'il n'y a plus de café classique ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyClassicCoffeeMachine();
    machine.coffees = [];
    const money = machine.pay(0.4);
    expect(money).toBe(0.4);
});
test("QUAND on insère 50 cts et qu'il n'y a plus de café cappucino ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyCappuccinoMachine();
    machine.coffees = [];
    const money = machine.pay(0.5);
    expect(money).toBe(0.5);
});
test("QUAND on insère 60 cts et qu'il n'y a plus de café latte ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyLatteMachine();
    machine.coffees = [];
    const money = machine.pay(0.6);
    expect(money).toBe(0.6);
});
test("QUAND on insère 70 cts et qu'il n'y a plus de café espresso ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyEspressoMachine();
    machine.coffees = [];
    const money = machine.pay(0.7);
    expect(money).toBe(0.7);
});

test("QUAND on insère X cts et qu'il n'y a plus de gobelet ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createCustomMachine(0);
    const money = machine.pay(0.4);
    expect(money).toBe(0.4);
});

test("QUAND on insère X cts et qu'il n'y a plus d'eau ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createCustomMachine(10, 0);
    const money = machine.pay(0.4);
    expect(money).toBe(0.4);
});

test("Quand on insère un montant ne correspondant à aucun café ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const money = machine.pay(0.3);
    expect(money).toBe(0.3);
});

//SUGAR
test("ETANT DONNEE une machine qui dispose d'un stock de sucre QUAND on insère 40 cts et que l'on demande une quantité de sucre inférieure au stock ALORS un café classique coule ET le stock de ce café diminue ET le stock de sucre diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(0.4, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 2);
});

test("ETANT DONNEE une machine qui dispose d'un stock de sucre QUAND on insère 50 cts et que l'on demande une quantié de sucre supérieure au stock ALORS aucun café ne coule et on rend l'argent.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Cappuccino");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(0.5, sugarNumber + 1);
    expect(money).toBe(0.5);
    expect(machine.getCoffeeAmount("Cappuccino")).toBe(coffeeNumber);
    expect(machine.getSugarAmount()).toBe(sugarNumber);
});

test("ETANT DONNEE une machine qui ne dispose plus de sucre QUAND on insère 60 cts et que l'on demande du sucre ALORS aucun café ne coule et on rend l'argent.", () => {
    const machine = MachineBuilder.createEmptySugarMachine();
    const coffeeNumber = machine.getCoffeeAmount("Latte");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(0.6, 2);
    expect(money).toBe(0.6);
    expect(machine.getCoffeeAmount("Latte")).toBe(coffeeNumber);
    expect(machine.getSugarAmount()).toBe(sugarNumber);
});

test("ETANT DONNEE une machine qui ne dispose plus de touillette QUAND on insère 40 cts et que l'on demande du sucre ALORS un sucré café coule sans touillette.", () => {
    const machine = MachineBuilder.createEmptyStirrerMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(0.4, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 2);
});

test("ETANT DONNEE une machine QUAND on insère 40 cts et que l'on demande du sucre ALORS une touillette est consommée.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const stirrerNumber = machine.getStirrerAmount();
    const money = machine.pay(0.4, 1);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 1);
    expect(machine.getStirrerAmount()).toBe(stirrerNumber - 1);
});

test("ETANT DONNEE une machine QUAND on insère 40 cts et que l'on demande un café classique allongé ALORS 2 doses d'eaux ont été consommées.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const waterNumber = machine.getWaterAmount();
    const money = machine.pay(0.4, undefined, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getWaterAmount()).toBe(waterNumber - 2);
});