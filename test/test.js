const mach = require("../src/machine");

test('ETANT DONNE une machine QUAND on insère 40 cts ALORS un café coule', ()=> {
    //Etant donné une machine
    const machine = new mach.Machine(1, 1, 1);

    //Quand on met 40Cent
    machine.pay(0.40);

    //Alors un café coule
    expect(machine.getCoffeeServed()).toBe(1);
    expect(machine.getMoneyCollected()).toBe(0.40);
})

test('ETANT DONNE une machine QUAND on insère moins de 40 cts ALORS aucun café coule ET l\'argent est rendu',()=>{
    //Etant donné une machine 
    const machine = new mach.Machine(1,1,1);

    //Quand on met 39Cent
    const moneyReturned = machine.pay(0.39)
    //l'argent rendu doit être l'argent inséré ET aucun café ne coule
    expect(moneyReturned).toBe(0.39)
    expect(machine.getCoffeeServed()).toBe(0);
})

test('ETANT DONNE une machine QUAND on insère plus de 40 cts ALORS un café coule ET l\'argent est gardé',()=>{
     //Etant donné une machine 
    const machine = new mach.Machine(1, 1, 1);

    machine.pay(0.41);

    //Alors un café coule
    expect(machine.getCoffeeServed()).toBe(1);
    expect(machine.getMoneyCollected()).toBe(0.41);
});


test('ETANT DONNE une machine n\'ayant plus de café / gobelets QUAND on insère  40 cts ALORS aucun café coule ET l\'argent est rendu',()=>{
     //Etant donné une machine 
    const machine = new mach.Machine(0,0,0);
    const moneyReturned = machine.pay(0.40)
    expect(machine.getCoffeeServed()).toBe(0);
    expect(moneyReturned).toBe(0.40)

});

test("Manque Ressources", () => {
     //Etant donné une machine 
    const machine = new mach.Machine(0, 0, 0);
    const argentRendu = machine.pay(0.4);
    expect(machine.getCoffeeServed()).toBe(0);
    expect(argentRendu).toBe(0.4);
});

