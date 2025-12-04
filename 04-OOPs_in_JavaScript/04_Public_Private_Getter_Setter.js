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


/*
	─────────── Getters & Setters (Parameters Explained) ───────────

	• GETTER:
		- A getter NEVER takes a parameter.
		- Reason: A getter is used only to *read* a value.
		- It behaves like a property, not a function.
		- Calling a getter:  obj.value
		  (no parentheses → because it cannot receive arguments)

	• SETTER:
		- A setter ALWAYS takes exactly ONE parameter.
		- Reason: A setter is used to *update/change* a value.
		- It behaves like a property assignment, not a function.
		- Calling a setter:  obj.value = something
		  (value on the right becomes the setter’s parameter)

	• Why they work like properties:
		- Getters/Setters hide real functions behind clean syntax.
		- You control reading/writing without exposing internal logic.

	• Summary:
		getter → NO arguments → read only  
		setter → ONE argument → write/update  

	───────────────────────────────────────────────────────────────
	| Feature    | Getter          | Setter                  |
	| ---------- | --------------- | ----------------------- |
	| Purpose    | Read a property | Write/update a property |
	| Parameters | ❌ 0 arguments  | ✔ Exactly 1 argument    |
	| Called as  | `obj.prop`      | `obj.prop = value`      |
	| Looks like | property        | assignment              |

*/
