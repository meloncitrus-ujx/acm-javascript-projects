# JavaScript Foundations: A Self-Paced Learning Path

Welcome to the ACM JavaScript learning workshop! This guide is designed to take you from writing your first line of JavaScript to building interactive web apps, real-world tools, and connecting with live internet data.

The goal is not to rush, but to learn by doing. Watch the video lessons, write the code yourself, build the projects step by step, and don't hesitate to ask questions.

---

## 📚 Core Learning Resources

* **Primary Deep-Dive Video Course (22 Hours):** [JavaScript Tutorial Full Course - Beginner to Pro by SuperSimpleDev](https://www.youtube.com/watch?v=EerdGm-ehJQ)
  * *Watch this for in-depth explanations on how web apps work, storing data, making interactive web pages, writing tests, and building a full online store.*
* **Interactive & Modular Video Course (12 Hours):** [JavaScript Full Course by Bro Code](https://www.youtube.com/watch?v=lfmg-EJ8gm4)
  * *Watch this for fast, easy-to-follow lessons on basic tools, buttons, animations, and small interactive apps.*
* **Quick Reference & Examples:** [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* **Detailed Reading:** [The Modern JavaScript Tutorial (javascript.info)](https://javascript.info/)

---

## 🗺️ Step-by-Step Curriculum Roadmap

### Phase 1: The Absolute Basics & Making Decisions
* **Topics:** Storing information (variables), numbers, text (strings), true/false values (booleans), math, and writing simple rules (`if/else`, loops).
* **Goal:** Understand how to give step-by-step instructions to the computer.

### Phase 2: Reusable Code & Working with Lists
* **Topics:** Writing reusable blocks of code (functions), handling lists of items (arrays), and looping through data.
* **Goal:** Learn how to write clean code without repeating yourself.

### Phase 3: Making Web Pages Interactive
* **Topics:** Connecting JavaScript to HTML and CSS (the DOM), selecting buttons/inputs on the screen, listening for clicks or key presses, and changing what appears on the web page.
* **Goal:** Make your web page react whenever a user clicks a button or types something.

### Phase 4: Storing Data & Multi-File Projects
* **Topics:** Grouping related data (objects), saving data in the browser so it doesn't disappear on refresh (`localStorage`), and splitting your code cleanly across multiple files (modules).
* **Goal:** Build web pages that remember user choices even after closing the browser tab.

### Phase 5: Organizing Bigger Codebases (OOP)
* **Topics:** Using blueprints (classes) to create items with their own data and actions, and organizing code so data and visual design stay neat.
* **Goal:** Keep your code organized as your projects get bigger and more complex.

### Phase 6: Working with the Internet & Checking for Bugs
* **Topics:** Fetching live data from online services (`fetch`, APIs), handling loading times (`async/await`), and writing automatic checks (testing) to verify your code works properly.
* **Goal:** Connect your web apps to live information from the web and catch errors automatically.

---

## ✅ Progress Checklist

Use this checklist to tick off topics as you learn them:

### **1. Core Basics & Decisions**
- [ ] Storing values in variables (`let`, `const`)
- [ ] Text (`strings`), Numbers, and True/False (`booleans`)
- [ ] Basic math (`+`, `-`, `*`, `/`) and working in cents for money
- [ ] Comparing values (`===`, `!==`, `>`, `<`)
- [ ] Making decisions with `if`, `else if`, and `else`
- [ ] Repeating actions using `for` and `while` loops

### **2. Text, Numbers & Date Helpers**
- [ ] Combining text and variables easily using template strings (`` `Hello ${name}` ``)
- [ ] Helpful text shortcuts (`trim()`, `slice()`, `toLowerCase()`, `toUpperCase()`)
- [ ] Generating random numbers (`Math.random()`, `Math.floor()`)
- [ ] Getting and displaying the current date and time (`Date` object)

### **3. Functions (Reusable Actions)**
- [ ] Creating and calling basic functions
- [ ] Modern arrow functions (`() => {}`)
- [ ] Passing information into functions (parameters) and getting values out (`return`)
- [ ] Running functions in the future or after a delay (`setTimeout()`, `setInterval()`)

### **4. Lists & Data Groups**
- [ ] Creating lists (`arrays`) and adding/removing items (`push()`, `splice()`)
- [ ] Looping through lists easily (`forEach()`, `map()`, `filter()`)
- [ ] Grouping related information (`objects`) with key-value pairs
- [ ] Converting data to and from text format (`JSON.stringify()`, `JSON.parse()`)

### **5. Interactive Web Pages (The DOM)**
- [ ] Finding elements on the screen (`document.querySelector()`)
- [ ] Changing text and HTML on the screen (`textContent`, `innerHTML`)
- [ ] Adding and removing CSS styling with JavaScript (`classList.add()`, `classList.remove()`)
- [ ] Responding to user clicks and typing (`addEventListener`, `click`, `keydown`)
- [ ] Generating dynamic HTML directly from your data list

### **6. Saving Data in the Browser**
- [ ] Saving data so it stays on page reload (`localStorage.setItem()`, `localStorage.getItem()`)
- [ ] Deleting saved data (`localStorage.removeItem()`, `localStorage.clear()`)
- [ ] Reading web address parameters (URL search params)

### **7. Multi-File Projects & Classes**
- [ ] Sharing code between different files (`import` and `export`)
- [ ] Creating object blueprints (`classes` and `constructor()`)
- [ ] Sharing features between blueprints (`extends` and `super`)

### **8. Live Web Data & Testing**
- [ ] Fetching live data from online services using `fetch()`
- [ ] Waiting for web requests to finish using `async` and `await`
- [ ] Catching unexpected connection errors using `try...catch`
- [ ] Running automatic checks with a testing tool (Jasmine)
- [ ] Tracking changes with Git (save, commit, push, and Pull Requests)

---

## 🛠️ Progressive Project Tracks

Here is the list of projects you will build. Each project is fully coded line-by-line inside the video tutorials so you can follow along easily!

| Project | What You Are Building |
| :--- | :--- |
| **1. Number Counter & Temperature Converter** | An interactive app with **Plus**, **Minus**, and **Reset** buttons to increase or decrease a number, plus a tool that converts temperatures between Celsius and Fahrenheit. |
| **2. Dice Roller & Random Password Generator** | A game that rolls random dice when you click a button, and a tool that creates secure, randomized passwords based on rules you choose (like length, numbers, and symbols). |
| **3. Digital Clock & Precision Stopwatch** | A live digital clock that updates every second to show your current time, plus a working stopwatch with **Start**, **Stop**, and **Reset** buttons. |
| **4. To-Do List Tracker** | A task list app where you can type in a task and due date, click **Add** to display it on the page, click **Delete** to remove it, and have your tasks stay saved even if you refresh the browser. |
| **5. On-Screen Calculator** | A clickable on-screen calculator that lets you type numbers, add/subtract/multiply/divide, clear the screen, and calculate the final total. |
| **6. Rock-Paper-Scissors Game (with Autoplay)** | A full game where you play against the computer, keep score (Wins, Losses, Ties) across page refreshes, use keyboard shortcuts (`R`, `P`, `S`), or turn on **Autoplay** to let the computer play itself. |
| **7. Live Weather Forecast App** | A weather app where you type any city name in a search box, click **Get Weather**, and fetch live forecast data from the internet to show the real-time temperature, humidity, and weather emoji. |
| **8. Mini Online Store (Amazon Clone)** | A complete multi-page online shopping website with a product catalog, interactive cart, delivery date selectors, price calculations, and automatic tests to verify the code works. |

---

## 🚀 Getting Started with Projects (GitHub Workflow)

To submit your project work and get feedback, follow this standard step-by-step workflow:

### **Step 1: Clone the Starter Repository**
* Open your terminal or command prompt and clone the workshop repository to your local machine:
  ```bash
  git clone https://github.com/MPSTME-ACM/js-workshop.git
  cd <repository_folder_name>
  ```

### **Step 2: Work on the Projects**
* Open the cloned project folder in **VS Code**.
* Read the algorithm instructions inside each project's `script.js` file and implement the required code.
* Use the **Live Server** extension in VS Code to preview and test your applications in real time.

### **Step 3: Create a New Repository on Your GitHub**
* Go to [GitHub.com](https://github.com) and log in.
* Click the **"+"** icon in the top-right corner and select **New repository**.
* Name your repository (e.g., `acm-javascript-projects`), choose **Public**, and click **Create repository** (do not initialize with a README/license).

### **Step 4: Point Your Local Code to Your GitHub Repository**
* In your terminal inside the project directory, update your Git remote origin to point to your new personal repository:
  ```bash
  # Check your current remote
  git remote -v

  # Update the remote URL to your new repository
  git remote add origin https://github.com/<your-username>/<your-new-repo-name>.git
  ```

### **Step 5: Save, Commit, and Push Your Work**
* Stage all your completed project files, create a commit, and push the code to your GitHub account:
  ```bash
  git add .
  git commit -m "Completed all JavaScript workshop projects"
  git push -u origin main
  ```

### **Step 6: Submit via Tech HUB**
* Visit your repository page on GitHub (e.g., `https://github.com/<your-username>/<your-new-repo-name>`).
* Verify that all your project folders, HTML/CSS/JS files, and commits are visible.
* Copy your repository URL and paste it into the **ACM Submission Form on Tech HUB**
