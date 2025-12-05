# JavaScript OOP — Full Complete Notes (Beginner to Advanced)

This file gives you **deep theory + clear explanations + simple examples**.
It focuses on understanding *why* OOP exists, *what problems it solves*, and *how JavaScript implements it*.

---

# 🌍 What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm where you structure your code using **objects** — containers that hold:

* **data** (properties), and
* **behavior** (methods).

OOP is used everywhere: games, web apps, mobile apps, banking systems, even operating systems.

## ✨ Why OOP Exists — The Real Reason

Before OOP, code was written in a procedural way (just functions + variables everywhere).
This created problems:

* Code became too large
* Hard to manage
* Hard to reuse
* Same logic existed in multiple places
* Updating one part could break everything else

**OOP solves this by grouping related data + functions together into objects.**

Example thought:

* A Car → brand, speed, color, drive(), brake()
* A Student → name, marks, grade(), study()

Each object models a real-life thing.

---

# 🧱 The Building Blocks of OOP

JavaScript OOP is built on these fundamentals:

* **Classes**
* **Objects**
* **Constructor**
* **Properties** (public/private)
* **Methods** (public/private)
* **Getters/Setters**
* **Static members**
* **4 Pillars** of OOP

Let's go deep into every concept.

---

# 📌 1. Classes (Blueprints)

A **class** is a blueprint or template used to create multiple objects.

### Why Classes?

Classes:

* keep code organized
* help reuse logic
* allow object creation with different values

### Theory

A class defines:

* **what data an object will have** (properties)
* **what the object can do** (methods)

### Example (simple)

```js
class Car {
    drive() {
        console.log("Driving...");
    }
}
```

---

# 📌 2. Objects (Instances)

An **object** is the actual thing created from a class.

### Theory

An object:

* occupies memory
* has real values
* can call methods of the class

Example:

```js
const c = new Car();
c.drive();
```

---

# 📌 3. Constructor

The `constructor()` is a **special method** that runs automatically when you create an object.

### Why Constructor?

* To initialize properties
* To assign values
* To prepare the object

### Theory Rules

* Only ONE constructor per class in JavaScript.
* The constructor runs **automatically**.
* You cannot name it anything else.
* If you don’t write one, JS creates an empty constructor.

---

# 📌 4. Public vs Private Members

JavaScript provides two levels of access:

## **Public Members**

Accessible from anywhere.

```js
this.name = "Ayan";
```

## **Private Members (`#`)**

Accessible **only inside the class**.

```js
#password = 1234;
```

### Why Private?

* To protect important data
* To prevent accidental changes
* To hide logic

Private members are the backbone of **Encapsulation** and **Abstraction**.

---

# 📌 5. Methods

Methods are functions defined inside classes.
They represent the **behaviors** of an object.

### Types of methods:

* public methods
* private methods (#method)
* static methods

Example:

```js
class User {
    login() {}
    #validate() {}
    static helper() {}
}
```

---

# 📌 6. Getters & Setters

Getters and setters provide **controlled** access to object data.

### Theory — Why do we need them?

* To validate data before setting
* To hide implementation
* To prevent direct modification

### Rules

* Getter → no parameters
* Setter → exactly one parameter

---

# 📌 7. Static Properties & Methods

Static means:

* belongs to the **class itself**
* does NOT belong to objects

### When to use static?

* Utility functions
* Common tools
* Shared constants

Example:

```js
class MathTool {
    static add(a, b) { return a + b; }
}
```

---

# 🎯 The 4 Pillars of OOP (Core Theory)

These pillars are the heart of OOPs.
Every advanced system uses them.

---

# 🏛 1. Encapsulation

**Definition:** Bundling data + methods together inside a class and restricting access.

### Goal

* Protect internal data
* Prevent misuse
* Control what the user can update

### Tools for Encapsulation

* private fields (#name)
* private methods (#calculate())
* getters & setters

Encapsulation makes your class like a “capsule” that hides data.

---

# 🏛 2. Inheritance

**Definition:** A child class can inherit properties & methods from a parent class.

### Why Inheritance?

* Avoid code duplication
* Reuse logic
* Build hierarchies
* Extend behavior

Example in real life:

* Vehicle → Car, Bike, Truck

### Important Theory Points:

* `extends` keyword creates inheritance
* `super()` calls the parent constructor
* Child can override parent’s methods
* Private fields are **not inherited**

---

# 🏛 3. Abstraction

**Definition:** Hiding complex internal logic and exposing only what the user needs.

### Why Abstraction?

* Keeps code clean
* User doesn’t need to know inner mechanics
* Protects internal complexity

Example thought:

* You use `car.start()` but don’t know engine internals.

### How JS provides Abstraction?

* private fields / methods
* public methods as a simple interface

---

# 🏛 4. Polymorphism

**Definition:** Same method name, different output depending on the object.

### Why Polymorphism?

* Write flexible code
* Less if-else
* Makes inheritance powerful

Real example:

* WhatsApp’s send(): text, audio, video, image → all different behaviors

### Two types of Polymorphism in JS

1. **Method Overriding** (supported)
2. **Method Overloading** (NOT directly supported in JS)

---

# 📌 Important OOP Concepts (Additional Theory)

## 🎯 Method Overriding

Child class replaces parent’s method.
This is the main form of polymorphism in JS.

---

## 🎯 super Keyword

Used in two places:

* `super()` → call parent constructor
* `super.method()` → call parent method

JS forces you to call `super()` before accessing `this` in a child constructor.

---

## 🎯 This Keyword

`this` refers to the object created from a class.

Behavior changes depending on where it’s used — but inside classes it's straightforward:

* `this.name` → refers to the property of that particular object.

---

# 📌 Full OOP Flow (Theory Summary)

1. You create a **class** → defines behavior and structure.
2. You create an **object** → gets its own copy of the data.
3. The **constructor** initializes the object.
4. **this** refers to the object.
5. **private fields** protect sensitive data.
6. **getters/setters** manage controlled access.
7. **static methods** are utilities.
8. **inheritance** allows code reuse.
9. **abstraction** hides complexity.
10. **polymorphism** changes behavior dynamically.

This is everything OOP includes.

---

# 🎓 Final Summary of All OOP Topics Covered

**You now know:**

* What OOP is
* Why it exists
* How classes work
* How objects behave
* Constructor theory
* Public vs private fields
* Properties & methods
* Getters & setters
* Static members
* Encapsulation
* Inheritance
* Abstraction
* Polymorphism
* Overriding
* super keyword
* this keyword
* Private methods
* How JavaScript implements OOP internally

---