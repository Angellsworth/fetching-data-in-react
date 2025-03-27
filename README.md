# 📡 Fetching Data in React

## 🎯 Learning Objective
By the end of this lesson, students will be able to **describe what AJAX is** and **explain its role** in making HTTP requests in single-page applications (SPAs).

---

## 🔄 Retrieving Data in React

React apps pass data through **props**, but what if we need data from *outside* the app?

To build **full-stack applications**, React must **communicate with external sources**, like servers or APIs. That’s where **AJAX** comes in.

---

## ❓ What is AJAX?

AJAX stands for **Asynchronous JavaScript and XML**, but today it’s more commonly used with **JSON** than XML.

### ✅ What it does:
- Enables **asynchronous** client-server communication.
- Lets apps **send/receive data without reloading the page**.
- Makes apps more **dynamic** and **interactive**.

> 🧠 AJAX originally relied on the `XMLHttpRequest` object in JavaScript, but tools like the `fetch()` API or `Axios` have largely replaced this approach.

---

## 🌍 The Role of AJAX in SPAs

Before SPAs, sites like Amazon reloaded entire pages for every update (SSR).

Now, SPAs like **Google Maps** use **AJAX** to:
- Send small requests as needed (e.g., when dragging the map),
- Receive only the updated data,
- Update the DOM *without a page refresh*.

This results in **smoother, faster experiences**.

---

## ⚛️ AJAX in React

React can use AJAX techniques to pull in external data via:

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => {
    // Use the data inside your React component
  });