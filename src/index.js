class Machine {
    constructor(qtiteCafe,qtiteGobelet,qtiteEau) {
        this.qtiteEau = qtiteEau;
        this.qtiteCafe = qtiteCafe;
        this.qtiteGobelet = qtiteGobelet
        this.nombreCafeServis = 0;
        this.argentEncaisse = 0;
    }
    Inserer(argent){
        console.log(this.qtiteCafe)
        if(argent>=0.40 && this.qtiteCafe>=1 && this.qtiteGobelet >= 1 && this.qtiteEau>=1){
            this.argentEncaisse += argent;
            this.nombreCafeServis+=1;
            return 0;
        }else{
            return argent;
        }

    }
    getCafeServis(){
        return this.nombreCafeServis;
    }
    getArgentEncaisse(){
        return this.argentEncaisse;
    }

}

exports.Machine = Machine;
