const {
    ClassicCoffee
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("ETANT DONNEE une machine qui dispose d'un stock de café QUAND on insère une carte et que l'on demande un café classique ALORS un café classique coule ET le stock de ce café diminue ET la carte est débitée", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const accountMoney = machine.cardPayment.getAccountMoney();
    const money = machine.pay(ClassicCoffee.id, 0.4, true);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.cardPayment.getAccountMoney()).toBe(accountMoney - 0.4);
});

test("ETANT DONNEE une machine qui dispose d'un stock de café QUAND on insère une carte et que l'on demande un café classique ET que la carte n'a pas assez d'argent ALORS aucun café ne coule ET la carte n'est pas débitée", () => {
    const machine = MachineBuilder.createEmptyCardPaymentMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const accountMoney = machine.cardPayment.getAccountMoney();
    const money = machine.pay(ClassicCoffee.id, 0, true);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber);
    expect(machine.cardPayment.getAccountMoney()).toBe(accountMoney);
});
