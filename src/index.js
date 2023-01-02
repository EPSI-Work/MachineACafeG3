class Machine {
    constructor(coffeeAmout,cupAmount,waterAmout) {
        this.waterAmout = waterAmout;
        this.coffeeAmout = coffeeAmout;
        this.cupAmount = cupAmount
        this.coffeeServed = 0;
        this.moneyCollected = 0;
    }
    pay(money){
        console.log(this.coffeeAmout)
        if(money>=0.40 && this.coffeeAmout>=1 && this.cupAmount >= 1 && this.waterAmout>=1){
            this.moneyCollected += money;
            this.coffeeServed+=1;
            return 0;
        }else{
            return money;
        }

    }
    getCoffeeServed(){
        return this.coffeeServed;
    }
    getMoneyCollected(){
        return this.moneyCollected;
    }

}

exports.Machine = Machine;
