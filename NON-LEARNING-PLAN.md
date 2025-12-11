# 10-Day Full-Stack Learning Checklist  
_Start: HTML/CSS → JS → React → Backend_

---

## ✅ Day 1 – HTML & Basic CSS

**Goal:** Build a clean static page from scratch.

- [ ] Install / verify editor & browser setup
- [ ] Revise basic HTML structure:
  - [ ] `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
  - [ ] `<title>` and basic meta tags
- [ ] Practice core HTML elements:
  - [ ] Headings: `h1–h6`
  - [ ] Paragraphs: `p`, `span`, `strong`, `em`
  - [ ] Links & media: `a`, `img`, `video`
  - [ ] Lists: `ul`, `ol`, `li`
  - [ ] Forms: `form`, `input`, `label`, `button`, `textarea`
- [ ] Learn basic CSS:
  - [ ] Element / class / id selectors
  - [ ] Box model: `margin`, `padding`, `border`
  - [ ] `display: block / inline / inline-block`
  - [ ] Basic colors, fonts, background, width, height
- [ ] **Mini project – Portfolio page**
  - [ ] Hero section with name & title
  - [ ] About section
  - [ ] Projects section (list items)
  - [ ] Contact section with a (non-working) form

---

## ✅ Day 2 – Layouts with CSS (Flexbox, Grid & Responsive)

**Goal:** Be comfortable with layout & responsiveness.

- [ ] Learn Flexbox:
  - [ ] `display: flex`
  - [ ] `flex-direction`, `justify-content`, `align-items`
  - [ ] Centering content horizontally & vertically
- [ ] Learn CSS Grid:
  - [ ] `display: grid`
  - [ ] `grid-template-columns`
  - [ ] `gap`
- [ ] Responsive design:
  - [ ] Use `@media` queries (mobile, tablet/desktop)
  - [ ] Use responsive units: `%`, `vh`, `vw`, `rem`
- [ ] Refactor portfolio:
  - [ ] Use Flexbox/Grid for main layout
  - [ ] Make layout work on mobile & desktop
  - [ ] Add a simple navbar (top of page, horizontal)

---

## ✅ Day 3 – JavaScript Fundamentals (Core Language)

**Goal:** Understand JS syntax & logic (no DOM yet).

- [ ] Setup a `practice.js` file
- [ ] Variables & types:
  - [ ] `let` vs `const`
  - [ ] Strings, numbers, booleans
  - [ ] Arrays, objects
- [ ] Operators:
  - [ ] `+`, `-`, `*`, `/`
  - [ ] Comparison: `==`, `===`, `>`, `<`
  - [ ] Logical: `&&`, `||`, `!`
- [ ] Control flow:
  - [ ] `if`, `else if`, `else`
  - [ ] `switch` (optional)
- [ ] Loops:
  - [ ] `for`
  - [ ] `while`
  - [ ] `for...of`
- [ ] Functions:
  - [ ] Function declarations
  - [ ] Arrow functions
- [ ] Arrays & objects practice:
  - [ ] `map`, `filter`, `find`, `push`, `pop`
- [ ] **Mini exercises:**
  - [ ] Reverse a string
  - [ ] Filter numbers > 10 from an array
  - [ ] Sum numbers in an array

---

## ✅ Day 4 – JavaScript + DOM & Events

**Goal:** Make static pages interactive.

- [ ] DOM selection:
  - [ ] `document.querySelector`
  - [ ] `document.querySelectorAll`
- [ ] Manipulating DOM:
  - [ ] `innerText` / `textContent`
  - [ ] `innerHTML`
  - [ ] `classList.add`, `classList.remove`, `classList.toggle`
- [ ] Events:
  - [ ] `addEventListener('click', ...)`
  - [ ] Handle form `submit` event
  - [ ] Handle input change (`input`/`change` events)
- [ ] Local storage:
  - [ ] `localStorage.setItem`
  - [ ] `localStorage.getItem`
  - [ ] `localStorage.removeItem`
- [ ] **Mini project – To-Do List (Vanilla JS)**
  - [ ] Input + button to add task
  - [ ] Render tasks in a list
  - [ ] Mark tasks as done
  - [ ] Delete tasks
  - [ ] Persist tasks in `localStorage`

---

## ✅ Day 5 – Modern JS (ES6+), Async & Fetch

**Goal:** Write modern JS and talk to APIs.

- [ ] ES6+ language features:
  - [ ] Destructuring (arrays & objects)
  - [ ] Spread operator (`...`)
  - [ ] Template literals (`` `Hello ${name}` ``)
  - [ ] Default parameters
- [ ] Async JS:
  - [ ] Understand Promises
  - [ ] `async` / `await`
  - [ ] `try` / `catch`
- [ ] Fetch API:
  - [ ] `fetch(url).then(...)`
  - [ ] `const res = await fetch(url)`
  - [ ] Parsing JSON responses
- [ ] **Mini project – Simple API Page**
  - [ ] Page with text input (e.g. city or search query)
  - [ ] On button click, call a public API (dummy users, jokes, quotes, etc.)
  - [ ] Display results on the page
  - [ ] Show loading state and basic error message

---

## ✅ Day 6 – React Basics

**Goal:** Build your first React app and understand components/state.

- [ ] Create React app (CRA or Vite + React)
- [ ] File structure walkthrough
- [ ] Learn JSX:
  - [ ] Embedding expressions
  - [ ] Returning one root element
- [ ] Components:
  - [ ] Create simple functional components
  - [ ] Pass props to components
  - [ ] Compose components together
- [ ] State with `useState`:
  - [ ] Add and update state
  - [ ] Handle inputs with state
- [ ] Events in React:
  - [ ] `onClick`, `onChange`, `onSubmit`
- [ ] **Mini project – To-Do List (React)**
  - [ ] Components: `TodoApp`, `TodoList`, `TodoItem`, `TodoForm`
  - [ ] Store tasks in state
  - [ ] Add / mark done / delete tasks
  - [ ] Style with basic CSS or simple utility classes

---

## ✅ Day 7 – React Hooks, Routing & Data Fetching

**Goal:** Build a small multi-page React app with API calls.

- [ ] `useEffect`:
  - [ ] Run effect on mount
  - [ ] Run effect based on dependencies
- [ ] React Router:
  - [ ] Set up `BrowserRouter`
  - [ ] Define `Routes` and `Route`s
  - [ ] Use `Link` for navigation
- [ ] Data fetching in React:
  - [ ] Call API with `fetch` inside `useEffect`
  - [ ] Manage loading and error state
- [ ] **Mini project – Mini Dashboard**
  - [ ] Pages: Home, Users, About
  - [ ] Fetch a list of users from a public API
  - [ ] Display users on Users page
  - [ ] Show simple details view or modal for a single user

---

## ✅ Day 8 – Backend Basics (Node.js + Express)

**Goal:** Build your own backend API.

- [ ] Initialize Node project:
  - [ ] `npm init -y`
  - [ ] Install `express` and `cors`
- [ ] Express basics:
  - [ ] Create an `app.js` or `index.js`
  - [ ] Set up `app.listen(port)`
  - [ ] `app.use(express.json())` for JSON body parsing
- [ ] Routes:
  - [ ] `GET /tasks`
  - [ ] `POST /tasks`
  - [ ] `PUT /tasks/:id`
  - [ ] `DELETE /tasks/:id`
- [ ] In-memory store:
  - [ ] Keep tasks in an array (for now)
  - [ ] Implement CRUD operations against that array
- [ ] Enable CORS:
  - [ ] Allow requests from your React frontend
- [ ] Test with Postman / Thunder Client:
  - [ ] Verify each endpoint manually

---

## ✅ Day 9 – Database + Connect React to Backend

**Goal:** Persist data with a real DB and connect full-stack.

- [ ] Choose a database:
  - [ ] SQLite (local, simple) OR
  - [ ] MongoDB (e.g. MongoDB Atlas) with Mongoose
- [ ] Install DB client / ORM:
  - [ ] For SQLite: `better-sqlite3` or Prisma
  - [ ] For MongoDB: `mongoose`
- [ ] Create a Task model/schema:
  - [ ] Fields: `id`, `title`, `completed`, `createdAt` (and any others)
- [ ] Update Express API:
  - [ ] `GET /tasks` → fetch from DB
  - [ ] `POST /tasks` → insert into DB
  - [ ] `PUT /tasks/:id` → update in DB
  - [ ] `DELETE /tasks/:id` → delete from DB
- [ ] Connect React frontend to your backend:
  - [ ] Replace local-only logic with API calls
  - [ ] Load tasks from `http://localhost:<port>/tasks`
  - [ ] Create/update/delete tasks via API
  - [ ] Handle loading and errors in UI

---

## ✅ Day 10 – One Full-Stack App & Wrap-Up

**Goal:** Have one working full-stack app plus documentation.

- [ ] Choose main project (recommended: Task Manager)
  - [ ] Frontend: React app (tasks UI)
  - [ ] Backend: Node + Express API
  - [ ] DB: SQLite or Mongo
- [ ] Clean up project structure:
  - [ ] Separate routes, controllers, models on backend
  - [ ] Organize components on frontend (`components/`, `pages/` or feature folders)
- [ ] Add UX polish:
  - [ ] Show loading indicators
  - [ ] Show user-friendly error messages
  - [ ] Confirm before deleting a task
- [ ] Basic security / validation:
  - [ ] Validate input on backend (title not empty, etc.)
  - [ ] Handle unexpected errors with proper status codes
- [ ] Document everything in `README.md`:
  - [ ] Project description
  - [ ] Tech stack
  - [ ] How to run frontend
  - [ ] How to run backend
  - [ ] Environment variables needed
  - [ ] API endpoints list
- [ ] Reflection:
  - [ ] Create `LEARNING_NOTES.md`
  - [ ] Write what you feel strong in now
  - [ ] List areas you want to deepen next (e.g. auth, testing, deployment)

---
