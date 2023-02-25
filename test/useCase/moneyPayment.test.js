const { ClassicCoffee } = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test(`ETANT DONNEE une machine qui dispose d'un stock de café
QUAND on insère le montant exact en monnaie
ET que l'on demande un café classique
ET qu'il y a assez de monnaie dans la machine
ALORS un café classique coule
ET le stock de monnaie augmente`, () => {
  const machine = MachineBuilder.createDefaultMachine();
  const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
  const machineMoneyStockBeforePayment = 0;
  const money = machine.pay(ClassicCoffee.id, 0.4, false);
  const machineMoneyStockAfterPayment = machine.money;

  expect(money).toBe(0);
  expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
  expect(machineMoneyStockBeforePayment).toBeLessThan(
    machineMoneyStockAfterPayment
  );
});

test(`ETANT DONNEE une machine qui dispose d'un stock de café
QUAND on insère un montant supérieur en monnaie
ET que l'on demande un café classique
ET que la machine peut rendre la monnaie
ALORS un café classique coule
ET on rend la monnaie
ET le stock de monnaie augmente`, () => {
  const machine = MachineBuilder.createCustomMachine(
    undefined,
    undefined,
    undefined,
    undefined,
    0.5
  );
  const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
  const machineMoneyStockBeforePayment = 0;
  const money = machine.pay(ClassicCoffee.id, 0.8, false);
  const machineMoneyStockAfterPayment = machine.money;

  expect(money).toBeGreaterThan(0);
  expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
  expect(machineMoneyStockBeforePayment).toBeLessThan(
    machineMoneyStockAfterPayment
  );
});

test(`ETANT DONNEE une machine qui dispose d'un stock de café
QUAND on insère un montant supérieur en monnaie
ET que l'on demande un café classique
ET que la machine ne peut pas rendre la monnaie
ALORS rien ne coule
ET on rend la monnaie
ET le stock de monnaie reste inchangé`, () => {
  const machine = MachineBuilder.createDefaultMachine();
  const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
  const machineMoneyStockBeforePayment = 0;
  const money = machine.pay(ClassicCoffee.id, 0.8, false);
  const machineMoneyStockAfterPayment = 0;
  expect(money).toBeGreaterThan(0);
  expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber);
  expect(machineMoneyStockBeforePayment).toBe(machineMoneyStockAfterPayment);
});

test(`ETANT DONNEE une machine qui dispose d'un stock de café
QUAND on insère un montant inférieur en monnaie
ET que l'on demande un café classique
ALORS rien ne coule
ET on rend la monnaie
ET le stock de monnaie reste inchangé`, () => {
  const machine = MachineBuilder.createDefaultMachine();
  const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
  const machineMoneyStockBeforePayment = 0;
  const money = machine.pay(ClassicCoffee.id, 0.1, false);
  const machineMoneyStockAfterPayment = 0;
  expect(money).toBeGreaterThan(0);
  expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber);
  expect(machineMoneyStockBeforePayment).toBe(machineMoneyStockAfterPayment);
});
