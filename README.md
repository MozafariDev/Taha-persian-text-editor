# 🇮🇷 Taha Persian Text Editor

<p align="center">
  <strong>A lightweight Persian text utility built with HTML, CSS and Vanilla JavaScript</strong>
</p>

<p align="center">
  <a href="https://github.com/Tahamozafari1234">🐙 GitHub</a> •
  <a href="https://quera.org/profile/Taha.mz">💻 Quera</a>
</p>

---

## 📖 Overview

**Taha Persian Text Editor** is a lightweight, browser-based utility for common Persian text operations. The application provides a simple RTL interface where text is entered and processed directly in the browser.

The project is intentionally small and dependency-free: it uses plain HTML, CSS and JavaScript and does not require a backend, database, package manager or build process.

## ✨ Features

- 🔤 **Character count** — counts characters in the entered text
- 📝 **Word count** — counts whitespace-separated words
- 🔄 **Reverse letters** — reverses the entered characters
- 🔁 **Reverse words** — reverses the order of words
- 📋 **Copy result** — copies the generated output through the browser Clipboard API
- 🧹 **Reset** — clears the input and output
- 🇮🇷 **RTL Persian interface**
- 📱 Responsive CSS for smaller screens
- 🎨 Included Lalezar Persian font

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **HTML5** | Page structure and metadata |
| **CSS3** | Layout, styling and responsive behavior |
| **Vanilla JavaScript** | Text processing and interactions |
| **Clipboard API** | Copying generated output |
| **Lalezar** | Persian typography |
| **SVG** | Social/profile interface icons |

## 🧩 Available Tools

| Tool | Function |
|---|---|
| Character Count | Displays the number of characters |
| Word Count | Displays the number of words |
| Reverse Letters | Reverses all characters |
| Reverse Words | Reverses word order |
| Copy | Copies the displayed result |
| Reset | Clears the editor |

## ⚙️ How It Works

All processing happens client-side in the browser:

```text
User Input
    ↓
JavaScript Function
    ↓
Text Operation
    ↓
Result Display
```

There is no server-side text-processing layer in the project.

## 📂 Project Structure

```text
Taha-persian-text-editor/
├── index.html
├── style.css
├── script.js
├── fonts/
│   └── Lalezar-Regular.ttf
├── svg/
│   ├── github.svg
│   ├── instagram.svg
│   └── user-circle.svg
└── README.md
```

## 🚀 Run Locally

No installation, package manager or build step is required.

```bash
git clone https://github.com/Tahamozafari1234/Taha-persian-text-editor.git
cd Taha-persian-text-editor
```

Then open `index.html` in a modern browser.

## 🇮🇷 Persian & RTL Support

The HTML document is configured with an RTL direction and the interface is written for Persian text.

The project also bundles the **Lalezar** font locally for its interface typography.

## 📱 Responsive Design

The stylesheet includes responsive breakpoints for smaller viewport widths, including mobile-sized displays.

## 🔐 Client-Side Processing

The text operations implemented by `script.js` run in the browser. The repository contains no backend or database layer for the editor.

## 🎯 Project Purpose

This project is a practical front-end exercise focused on:

- DOM manipulation
- JavaScript functions
- Event-driven UI interactions
- String and text processing
- Clipboard interaction
- RTL web interfaces
- Responsive CSS
- Persian web typography

## 📌 Project Status

**Active personal project.**

The current implementation focuses on a compact set of Persian text utilities and can be extended with additional operations in future versions.

## 🔮 Possible Future Improvements

Potential additions could include:

- Character count with separate whitespace handling
- Reading-time estimation
- Additional Persian text utilities
- Formatting and punctuation tools
- More detailed output modes
- Accessibility refinements
- Additional responsive UI improvements

These are future ideas, not current features.

## 👨‍💻 Author

### Taha Mozafari

**Web Developer • Front-End Developer • Programmer**

- 🌐 Website: https://mozafaridev.github.io
- 🐙 GitHub: https://github.com/MozafariDev
- 💻 Quera: https://quera.org/profile/Taha.mz

## ⭐ Support

If you find the project useful, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with HTML, CSS & JavaScript.
</p>
