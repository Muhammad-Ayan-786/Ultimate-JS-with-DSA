/* <---------------------- Abstraction in JavaScript ---------------------->

Abstraction = Hiding complex details and exposing only what is necessary.

We use:
- Private fields (#)
- Private methods (#internalMethod)
- Public methods to interact with the object safely

Goal: User should not see or control the internal complex logic.
--------------------------------------------------------------------------*/

/*
   This file demonstrates JavaScript OOP Abstraction
   - Private fields
   - Private methods
   - Public methods
*/

class CoffeeMachine {

    // Private fields --- hidden from user
    #waterLevel = 0;
    #coffeeBeans = 0;

    constructor(water, beans) {
        this.#setWater(water);      // private logic
        this.#setBeans(beans);      // private logic
    }

    // ------------------ PRIVATE METHODS (Abstraction) -------------------

    #setWater(water) {
        if (water < 0) this.#waterLevel = 0;
        else if (water > 100) this.#waterLevel = 100;
        else this.#waterLevel = water;
    }

    #setBeans(beans) {
        if (beans < 0) this.#coffeeBeans = 0;
        else if (beans > 100) this.#coffeeBeans = 100;
        else this.#coffeeBeans = beans;
    }

    #brew() {
        if (this.#waterLevel < 20 || this.#coffeeBeans < 20) {
            console.log("Not enough water or beans!");
            return;
        }

        console.log("Brewing your coffee...");
        this.#waterLevel -= 20;
        this.#coffeeBeans -= 20;
    }

    // ------------------ PUBLIC METHODS (Shown to user) ------------------

    makeCoffee() {
        // User has no idea how brew works internally
        this.#brew();
        console.log("Coffee ready! ☕");
    }

    refillWater(amount) {
        this.#setWater(this.#waterLevel + amount);
        console.log("Water refilled!");
    }

    refillBeans(amount) {
        this.#setBeans(this.#coffeeBeans + amount);
        console.log("Beans refilled!");
    }

    status() {
        return {
            water: this.#waterLevel,
            beans: this.#coffeeBeans
        };
    }
}

// --------------------------- USE / OUTPUT -------------------------------

const m = new CoffeeMachine(50, 30);

console.log(m.status());  // { water: 50, beans: 30 }

m.makeCoffee();           // Coffee ready!
console.log(m.status());  // water: 30, beans: 10

m.makeCoffee();           // Not enough water or beans!

console.log(m.status());  // water: 30, beans: 10