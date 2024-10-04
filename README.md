# **Markcraft**

Welcome to **Markcraft**, a powerful and secure blogging platform built with Node.js, Express, and MongoDB. This application allows you to create, manage, and publish markdown-based blog posts with ease.


## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)


## **Features**

- **Markdown Support:** Write and format posts in Markdown for clean and readable content.
- **Sanitized Content:** Ensure that all HTML generated from Markdown is safe using DOMPurify.
- **Dynamic Slugs:** Automatically generate SEO-friendly slugs for each post.
- **Interactive UI:** View and manage posts with a clean and responsive interface.

## **Tech Stack**

- **Node.js** - JavaScript runtime for server-side operations.
- **Express** - Web framework for building RESTful APIs.
- **MongoDB** - NoSQL database for storing posts and user data.
- **EJS** - Templating engine for rendering HTML pages.
- **DOMPurify** - Library to sanitize HTML and prevent XSS attacks.
- **Marked** - Markdown parser and compiler.
- **jsdom** - JavaScript implementation of the DOM.
- **Slugify** - Library to create URL-friendly slugs.
- **Method-Override** - Middleware to support HTTP verbs such as PUT or DELETE.
- **dotenv** - Module to load environment variables from a `.env` file.

## **Installation**

1. **Clone the repository:**
    ```bash
    git clone <https://github.com/Anuragmishra1000/markcraft-blog-website>
    ```

2. **Navigate into the project directory:**
    ```bash
    cd markcraft
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Create a `.env` file for environment variables:**
    ```env
    MONGO_URI=<your-mongodb-uri>
    PORT=3000
    ```

5. **Start the server:**
    ```bash
    npm start
    ```
