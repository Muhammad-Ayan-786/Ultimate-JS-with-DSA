/* <------- Public, Private, Getter, & Setter in JavaScript -------> */

/*
   - Public fields
   - Private fields (#)
   - Getter
   - Setter with validation
*/

class Account {
	// public field
	balance = 0;

	// private field
	#pin;

	constructor(balance, pin) {
		this.balance = balance;
		this.#pin = pin;
	}

	// GETTER — reading private value safely
	get maskedPin() {
		const s = String(this.#pin);
		return s[0] + "*".repeat(s.length - 2) + s.slice(-1);
	}

	// SETTER — updating with validation
	set updatePin(newPin) {
		if (String(newPin).length !== 4) {
			throw new Error("PIN must be exactly 4 digits");
		}
		this.#pin = newPin;
	}
}

const acc = new Account(5000, 1234);
console.log(acc.maskedPin); // maskedPin() called without () because it's a getter treated as a property

// acc.#pin → ❌ error

acc.updatePin = 9999;
// acc.updatePin = 123; → ❌ error: PIN must be exactly 4 digits

console.log(acc.maskedPin); // updated masked PIN