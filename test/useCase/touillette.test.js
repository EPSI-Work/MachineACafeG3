const {
    ClassicCoffee
} = require("../../src/coffee.js");
const { MachineBuilder } = require("../../src/machineBuilder.js");

test("ETANT DONNEE une machine qui ne dispose plus de touillette QUAND on sélectionne un café classique et que l'on demande du sucre ALORS un sucré café coule sans touillette.", () => {
    const machine = MachineBuilder.createEmptyStirrerMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const money = machine.pay(ClassicCoffee.id, 0.4, undefined, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 2);
});

test("ETANT DONNEE une machine QUAND on sélectionne un café classique et que l'on demande du sucre ALORS une touillette est consommée.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const sugarNumber = machine.getSugarAmount();
    const stirrerNumber = machine.getStirrerAmount();
    const money = machine.pay(ClassicCoffee.id, 0.4, undefined, 1);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getSugarAmount()).toBe(sugarNumber - 1);
    expect(machine.getStirrerAmount()).toBe(stirrerNumber - 1);
});

test("ETANT DONNEE une machine QUAND on demande un café classique allongé ALORS 2 doses d'eaux ont été consommées.", () => {
    const machine = MachineBuilder.createDefaultMachine();
    const coffeeNumber = machine.getCoffeeAmount("Classic Coffee");
    const waterNumber = machine.getWaterAmount();
    const money = machine.pay(ClassicCoffee.id, 0.4, undefined, undefined, 2);
    expect(money).toBe(0);
    expect(machine.getCoffeeAmount("Classic Coffee")).toBe(coffeeNumber - 1);
    expect(machine.getWaterAmount()).toBe(waterNumber - 2);
});


