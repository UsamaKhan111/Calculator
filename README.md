# Calculator

A responsive calculator built with **HTML, CSS, and JavaScript**.

This project focuses on implementing calculator logic from scratch without using `eval()` or external libraries. The main challenge was designing the application's state management and handling user interactions similar to a real calculator.

## Features

* Basic arithmetic operations

  * Addition
  * Subtraction
  * Multiplication
  * Division
* Chained calculations (e.g. `12 + 7 - 1`)
* Delete (DEL) functionality
* All Clear (AC)
* Decimal number support
* Automatic rounding for long decimal results
* Protection against invalid calculations
* Responsive user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## What I Learned

This project helped me understand several important JavaScript concepts:

* Managing application state
* Event-driven programming
* DOM manipulation
* Breaking problems into smaller functions
* Handling user input and edge cases
* Building calculator logic without relying on `eval()`

One of the biggest learning outcomes was moving away from storing every button press in an array and instead managing the calculator using separate state variables for the first operand, operator, and second operand.

## Challenges

Some of the most interesting challenges included:

* Implementing chained operations
* Handling delete functionality correctly
* Managing calculator state after displaying a result
* Preventing invalid operations
* Updating the display while keeping the internal state synchronized

## Future Improvements

* Keyboard support
* Better error handling and messages
* Scientific calculator functions
* Improved UI animations
* Theme switcher
* Calculation history

This project was implemented independently to practice JavaScript fundamentals and problem-solving.
