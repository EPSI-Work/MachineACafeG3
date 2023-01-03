const {
    ClassicCoffee,
    Cappuccino,
    Latte,
    Espresso,
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("QUAND on sélectionne un café classique ALORS un café classique coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const money = machine.pay(ClassicCoffee.id, 0.4);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
});
test("QUAND on sélectionne un cappucino ALORS un cappucino coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Cappuccino");
    const money = machine.pay(Cappuccino.id, 0.5);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Cappuccino")).toBe(coffeeNumber - 1);
});
test("QUAND on sélectionne un latte ALORS un latte coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Latte");
    const money = machine.pay(Latte.id, 0.6);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Latte")).toBe(coffeeNumber - 1);
});
test("QUAND on sélectionne un espresso ALORS un espresso coule ET le stock de ce café diminue", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Espresso");
    const money = machine.pay(Espresso.id, 0.7);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Espresso")).toBe(coffeeNumber - 1);
});
