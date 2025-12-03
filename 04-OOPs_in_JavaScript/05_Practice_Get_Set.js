/* <------------ FNB Bank Account Class with Getters and Setters ------------> */

class FNB_BankAccount {
    // Private Properties
    #ID;
    #Balance;
    #PIN;

    // Public Properties
    fname = undefined;
    lname = undefined;
    branch = undefined;
    openedYearOn = undefined;

    constructor(fname, lname, branch, openedYearOn) {
        // Public
        this.fname = fname;
        this.lname = lname;
        this.branch = branch;
        this.openedYearOn = openedYearOn;
    }


    // setter #Balance
    set Balance (amount) {
        if (amount <= 0) {
            throw new Error("Your Current Balance is in Negative.");
        }
        this.#Balance = amount;
    }

    // setter #ID
    set ID (num) {
        if (String(num).length != 11) {
            throw new Error("ID must be exactly 4 digits");
        }
        this.#ID = num;
    }

    // setter #PIN
    set PIN (num) {
        // Length counts HOW MANY characters are inside the string
        if (String(num).length !== 4 && String(num).length !== 6) {
            throw new Error("PIN must be exactly 4 or 6 digits");
        }
        this.#PIN = num;
    }


    // getter for #Balance
    get Balance () {
        return `Your current Balance is ${this.#Balance}`;
    }

    // getter for #ID
    get strongID () {
        const ID_Str = String(this.#ID);
        return `ID: ` + ID_Str.slice(0, 2) + "*".repeat(ID_Str.length - 5) + ID_Str.slice(-3);
    }

    // getter for #PIN
    get strongPIN () {
        const PIN_Str = String(this.#PIN);

        // Length counts HOW MANY characters are inside the string
        if (PIN_Str.length === 4) // for 4 digit PIN
        {
            return `PIN: ` + PIN_Str.slice(0, 1) + "*".repeat(PIN_Str.length - 2) + PIN_Str.slice(-1);
        }

        // Length counts HOW MANY characters are inside the string
        if (PIN_Str.length === 6) // for 6 digit PIN
        {
            return `PIN: ` + PIN_Str.slice(0, 1) + "*".repeat(PIN_Str.length - 3) + PIN_Str.slice(-2);
        }
    }
}

// Ayan's Account (PIN : 4)
const Ayan = new FNB_BankAccount("Ayan", "Asim", "Ormonde", 24);

console.log(Ayan);

Ayan.Balance = 30000
Ayan.ID = 12345678910;
Ayan.PIN = 1234;

console.log(Ayan.Balance);
console.log(Ayan.strongID);
console.log(Ayan.strongPIN);

console.log(`\n`);

// Prince's Account (PIN : 6)
const Prince = new FNB_BankAccount("Prince", "Mal", "Robertsham", 20);

console.log(Prince);

Prince.Balance = 50000;
Prince.ID = 56789010111;
Prince.PIN = 456789;

console.log(Prince.Balance);
console.log(Prince.strongID);
console.log(Prince.strongPIN);