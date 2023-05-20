export default class Random {


     xn = 0.1;
     k = 3.9;
    seed(seed) {
        if (seed < 0 || seed > 1) {
            throw new RangeError(`Seed has to be in range [0-1] "${seed}" given`);
        }
        this.xn = seed;    
    }
    warmUp(){
        for(let x=0;x<100;x++){
            this.random();
        }
    }


    setk(k) {
        if (k < 0 || k > 4) {
            throw new RangeError(`k has to be in range [0-4] "${k}" given`);
        }
        this.k = k;
    }
    step() {
        this.k = this.xn > 0.5 ? 4 : 3.9;
        return this.xn * this.k * (1 - this.xn);
    };
    random() {
        this.xn = this.step();
        return this.xn;
    };
}