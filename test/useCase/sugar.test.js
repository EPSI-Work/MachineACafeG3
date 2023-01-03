const {
    ClassicCoffee,
    Cappuccino,
    Latte,
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("ETANT DONNEE une machine qui dispose d'un stock de sucre QUAND on sélectionne un café classique et que l'on demande une quantité de sucre inférieure au stock ALORS un café classique coule ET le stock de ce café diminue ET le stock de sucre diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(ClassicCoffee.id, 0.4, undefined, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 2);
});

test("ETANT DONNEE une machine qui dispose d'un stock de sucre QUAND on sélectionne un cappuccino et que l'on demande une quantié de sucre supérieure au stock ALORS aucun café ne coule et on rend l'argent.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Cappuccino");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(Cappuccino.id, 0.5, undefined, sugarNumber + 1);
    expect(money).toBe(0.5);
    expect(machine.getCoffeeAmount("Cappuccino")).toBe(coffeeNumber);
    expect(machine.getSugarAmount()).toBe(sugarNumber);
});

test("ETANT DONNEE une machine qui ne dispose plus de sucre QUAND on sélectionne un latte et que l'on demande du sucre ALORS aucun café ne coule et on rend l'argent.", () => {
    const machine = MachineBuilder.createEmptySugarMachine();
    const coffeeNumber = machine.getCoffeeAmount("Latte");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(Latte.id, 0.6, undefined, 2);
    expect(money).toBe(0.6);
    expect(machine.getCoffeeAmount("Latte")).toBe(coffeeNumber);
    expect(machine.getSugarAmount()).toBe(0);
});
