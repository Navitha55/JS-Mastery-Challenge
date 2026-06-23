# Day 4 - User Profile Manager 👤

## Objective

Build a web-based User Profile Manager that allows users to create, view, and manage user profiles while practicing core JavaScript concepts such as DOM manipulation, BOM methods, array methods, string methods, and event handling.

---

## Features

- Add new users using browser prompts.
- Automatically generate email addresses.
- Convert user names to uppercase for display.
- Prevent reserved usernames (e.g., "admin").
- Display all users in the browser console.
- Clear all users with a single click.
- Dynamically show or hide action buttons based on user availability.
- Display success messages using alerts.
- Simulate asynchronous behavior using `setTimeout()`.

---

## Concepts Practiced

### DOM Methods

- `getElementById()`
- `querySelector()`
- `classList.add()`
- `classList.remove()`
- `addEventListener()`

### BOM Methods

- `prompt()`
- `alert()`
- `setTimeout()`

### Array Methods

- `push()`
- `forEach()`

### String Methods

- `trim()`
- `toUpperCase()`
- `toLowerCase()`
- `includes()`

### Objects

Used objects to store user information:

```javascript
{
    id: 1,
    name: "JOHN",
    email: "john@example.com"
}
```

---

## Program Flow

```text
User Clicks Add User
        ↓
Enter User Name
        ↓
Validate Input
        ↓
Generate User Object
        ↓
Store User in Array
        ↓
Show Success Message
        ↓
Enable Show/Clear Buttons

User Clicks Show Users
        ↓
Display All Users in Console

User Clicks Clear Users
        ↓
Remove All Users
        ↓
Hide Show/Clear Buttons
```

---

## Learning Outcomes

Through this project, I learned:

- How to manipulate web pages using DOM methods.
- How browser APIs such as alerts and prompts work.
- How to use arrays to manage collections of data.
- How to work with objects to represent real-world entities.
- How to process strings using built-in methods.
- How to handle user interactions with event listeners.
- How to dynamically update the user interface based on application state.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Folder Structure

```text
User-Profile-Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---
