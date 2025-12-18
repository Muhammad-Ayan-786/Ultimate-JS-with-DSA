// Show welcome message
alert("Hello! Your script is running 🚀");

// Ask for age (prompt returns STRING)
let age = prompt("Hey, what's your age?", "0");

// Convert string to number
age = Number.parseInt(age);

// Validate input
if (Number.isNaN(age) || age < 0) {
    console.log("❌ Please enter a valid age!");
}
else {
    // Driving permission message
    let message = age < 18
        ? "🚫 You cannot drive"
        : "🚗 You can drive";

    console.log(message);

    // Extra confirmation for eligible drivers
    if (age >= 18) {
        confirm("Congratulations! You can drive now.\nAre you ready to drive?");
    }
}