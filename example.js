import Random from "./random.js";
let random = new Random();
random.seed(0.3);
console.log("warming up...");
random.warmUp(); //skips first 100 iterations
for (let x = 0; x < 5; x++) {
    console.log(random.random());
}
random.seed(0.3000000001);
console.log("warming up...");
random.warmUp();
for (let x = 0; x < 5; x++) {
    console.log(random.random());
}


