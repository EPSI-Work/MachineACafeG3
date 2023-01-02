const mach = require("../src/machine");

test("Insère 40 centimes", () => {
    //Etant donné une machine
    const machine = new mach.Machine(1, 1, 1);

    //Quand on met 40Cent
    machine.Inserer(0.4);

    //Alors un café coule
    expect(machine.getCafeServis()).toBe(1);
    expect(machine.getArgentEncaisse()).toBe(0.4);
});

test("Insère moins de 0.40", () => {
    //Etant donné une machine
    const machine = new mach.Machine(1, 1, 1);

    //Quand on met 39Cent
    const argentRendu = machine.Inserer(0.39);
    //l'argent rendu doit être l'argent inséré ET aucun café ne coule
    expect(argentRendu).toBe(0.39);
    expect(machine.getCafeServis()).toBe(0);
});

test("Insère plus de 40c", () => {
    //Etant donné une machine
    const machine = new mach.Machine(1, 1, 1);
    //on insère plus de 40c
    machine.Inserer(41);
    //Alors un café coule Et l'argent encaissé aussi
    expect(machine.getCafeServis()).toBe(1);
    expect(machine.getArgentEncaisse()).toBe(41);
});

test("Manque Ressources", () => {
    const machine = new mach.Machine(0, 0, 0);
    const argentRendu = machine.Inserer(0.4);
    expect(machine.getCafeServis()).toBe(0);
    expect(argentRendu).toBe(0.4);
});