const {
    ClassicCoffee,
    Latte,
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("QUAND on selectionne X café et qu'il n'y a plus de gobelet ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createCustomMachine(0);
    const money = machine.pay(ClassicCoffee.id, 0.4);
    expect(money).toBe(0.4);
});

test("QUAND on selectionne X café et qu'il n'y a plus d'eau ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createCustomMachine(10, 0);
    const money = machine.pay(Latte.id, 0.6);
    expect(money).toBe(0.6);
});


test("Quand on selectionne un café ne correspondant à aucun café ALORS on rend l'argent", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const money = machine.pay(0, 0.4);
    expect(money).toBe(0.4);
});