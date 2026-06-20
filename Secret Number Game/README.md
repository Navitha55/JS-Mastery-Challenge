# Day 2 - Secret Number Game 🔐

## Objective

Build a JavaScript-based Secret Number Game that allows the player to guess a hidden number within a limited number of attempts while demonstrating core JavaScript concepts.

---

## Features

* Player gets **3 attempts** to guess the secret number.
* Provides feedback after each guess:

  * 📉 Too Low
  * 📈 Too High
  * 🎉 Correct
* Displays a failure message when all attempts are exhausted.
* Uses a **closure** to protect the secret number from direct access.
* Accepts user input through browser prompts.
* Uses a loop to manage attempts.

---

## Concepts Practiced

### 1. Functions

* Normal Functions
* Arrow Functions
* Nested Functions

### 2. Closure

* The secret number is stored inside an outer function.
* The inner function remembers and accesses the secret number even after the outer function has finished execution.
* Demonstrates data hiding and state preservation.

### 3. Conditional Statements

* `if`
* `else if`
* `else`

Used to provide feedback based on the user's guess.

### 4. Loops

* `for` loop

Used to manage the player's three attempts.

### 5. User Input

* Browser `prompt()` function

Used to collect guesses from the player.

---

## Program Flow

```text
Start Game
    ↓
Create Secret Number Closure
    ↓
Attempt 1
    ↓
Check Guess
    ↓
Too Low / Too High / Correct
    ↓
Attempt 2
    ↓
Attempt 3
    ↓
Out of Attempts OR Success
```

---

## Sample Output

```text
🔐 Welcome to the Secret Number Game!

Attempt 1: Guess the secret number (1-10)
Enter: 4
📉 Too low

Attempt 2: Guess the secret number (1-10)
Enter: 9
📈 Too high

Attempt 3: Guess the secret number (1-10)
Enter: 7
🎉 Correct
```

---

## Learning Outcomes

Through this project, I learned:

* How closures help protect private data.
* How inner functions retain access to outer function variables.
* How conditional statements drive decision-making.
* How loops manage repeated attempts.
* How arrow functions differ from traditional functions.
* How browser prompts can be used for user interaction.

---

## Technologies Used

* HTML
* JavaScript (ES6)
* Browser Console

---

