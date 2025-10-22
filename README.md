# 🚀 Frontend Wizards — Profile Card & Multi-Page Project

## 🧠 Overview

This repository contains two stages of the **HNG Frontend Wizards** challenge:

- **Stage 0:** Testable Profile Card — A single-page interactive card showcasing personal details, bio, and social links.  
- **Stage 1:** Multi-Page Site — A simple, testable, and accessible multi-page website (Home, About Me, Contact).

Both stages demonstrate mastery of **semantic HTML**, **responsive CSS**, and **vanilla JavaScript** with testable data attributes.

---

## 🎯 Features

### 🌟 Stage 0 — Profile Card
- ✅ Semantic HTML structure (article, figure, section, etc.)
- ✅ Accessible and keyboard-navigable
- ✅ Responsive layout (mobile → desktop)
- ✅ Dynamic current time in milliseconds (`Date.now()`)
- ✅ Required `data-testid` attributes for automated testing
- ✅ Secure social links (`target="_blank" rel="noopener noreferrer"`)

### 🌐 Stage 1 — Multi-Page Application
- ✅ Three main pages: **Home**, **About Me**, and **Contact**
- ✅ Each page follows accessible and responsive design
- ✅ Navigation bar with active page highlighting
- ✅ Consistent header and footer across all pages
- ✅ Form validation for contact page
- ✅ Reflective writing and personal sections on About page

---

## 🧩 Required Data Test IDs

### Stage 0 — Profile Card
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

### Stage 1 — Multi-Page Website
| Page | Section | data-testid |
|------|----------|-------------|
| **About Me** | Bio | `test-about-bio` |
|  | Goals in this program | `test-about-goals` |
|  | Areas of low confidence | `test-about-confidence` |
|  | Note to future self | `test-about-future-note` |
|  | Extra thoughts | `test-about-extra` |
| **Contact** | Form container | `test-contact-form` |
|  | Name input | `test-contact-name` |
|  | Email input | `test-contact-email` |
|  | Message textarea | `test-contact-message` |
|  | Submit button | `test-contact-submit` |

---

## 🧱 Tech Stack

- **HTML5** — Semantic and accessible markup  
- **CSS3 (Flexbox/Grid)** — Modern responsive layouts  
- **JavaScript (Vanilla)** — For interactivity and live time rendering  

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
   open about.html
   open contact.html


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
