const {
    ClassicCoffee,
    Cappuccino,
    Latte,
    Espresso,
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("QUAND on sélectionne un café classique et qu'il n'y a plus de café classique ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyClassicCoffeeMachine();
    machine.coffees = [];
    const money = machine.pay(ClassicCoffee.id, 0.4);
    expect(money).toBe(0.4);
});
test("QUAND on sélectionne un cappuccino et qu'il n'y a plus de cappucino ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyCappuccinoMachine();
    machine.coffees = [];
    const money = machine.pay(Cappuccino.id, 0.5);
    expect(money).toBe(0.5);
});
test("QUAND on sélectionne un latte et qu'il n'y a plus de latte ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyLatteMachine();
    machine.coffees = [];
    const money = machine.pay(Latte.id, 0.6);
    expect(money).toBe(0.6);
});
test("QUAND on sélectionne un espresso et qu'il n'y a plus de espresso ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createEmptyEspressoMachine();
    machine.coffees = [];
    const money = machine.pay(Espresso.id, 0.7);
    expect(money).toBe(0.7);
});