# 🚀 Profile Card

## 🧠 Overview

This project is a **Profile Card component** built as part of the **Frontend Wizards Stage 0** challenge.  
It demonstrates the use of **semantic HTML**, **accessible design**, **responsive CSS**, and **vanilla JavaScript** to display user information in a clean and testable layout.

---

## 🎯 Features

- ✅ Semantic HTML structure (article, figure, section, etc.)
- ✅ Accessible and keyboard-navigable
- ✅ Responsive design (mobile → desktop)
- ✅ Live current time in milliseconds using `Date.now()`
- ✅ Testable elements with required `data-testid` attributes
- ✅ Secure external social links (`target="_blank" rel="noopener noreferrer"`)

---

## 🧩 Required Data Test IDs

Each element includes a specific `data-testid` for automated testing:

| Element                | data-testid                  |
| ---------------------- | ---------------------------- |
| Profile card container | `test-profile-card`          |
| User name              | `test-user-name`             |
| Bio paragraph          | `test-user-bio`              |
| Current time           | `test-user-time`             |
| Avatar image           | `test-user-avatar`           |
| Social links container | `test-user-social-links`     |
| Each social link       | `test-user-social-<network>` |
| Hobbies list           | `test-user-hobbies`          |
| Dislikes list          | `test-user-dislikes`         |

---

## 🧱 Tech Stack

- **HTML5** — for semantic structure
- **CSS3 (Flexbox/Grid)** — for styling and responsive layout
- **JavaScript (Vanilla)** — for dynamic time rendering

---

## 🖥️ Live Demo

🔗 **Live Site URL:** []()

---

## 📁 Repository

🔗 **GitHub Repo:** [https://github.com/Sulaimon-Ola/testable-profile-card.git](https://github.com/Sulaimon-Ola/testable-profile-card.git)

---

## ⚙️ Setup Instructions (Run Locally)

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sulaimon-Ola/testable-profile-card.git
   ```

2. Navigate into the project folder:

   ```bash
   cd testable-profile-card
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```
   or simply drag it into your browser window.

---

## 📱 Responsiveness

- On **mobile**, content stacks vertically (image on top, text below).
- On **desktop**, avatar is displayed to the left and text to the right.
- Layout adapts automatically using CSS Flexbox and media queries.

---

## ♿ Accessibility

- All links and buttons are **keyboard-focusable**.
- Avatar includes descriptive **alt text**.
- Color contrast and focus outlines meet accessibility standards.

---

## 🕒 Dynamic Behavior

The `Date.now()` function is used to display the **current time in milliseconds**, which updates in real time via JavaScript.

---

## 📸 Preview

![Profile Card Screenshot](./assets/images/preview.png)

---

## 👨‍💻 Author

**Name:** Sulaimon Olayiwola  
**GitHub:** [@Sulaimon-Ola](https://github.com/Sulaimon-Ola)  
**Twitter:** [@shinar930](https://twitter.com/yourhandle)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
