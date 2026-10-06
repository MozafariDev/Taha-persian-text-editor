
# Persian Text Editor

A simple, client-side text editor built with HTML, CSS, and JavaScript. Designed specifically for the Persian language, it provides essential tools like character and word counting, text reversal (letters and words), and copy functionality. No server required – runs entirely in your browser.

---

## ✨ Features

- 🔢 **Character Counter** — Counts all characters in the text
- 📝 **Word Counter** — Counts words in the text
- 🔄 **Reverse Letters** — Reverses the order of all characters
- 🔁 **Reverse Words** — Reverses the order of all words
- 📋 **Copy to Clipboard** — Copies the output text with one click
- 🔄 **Reset** — Clears the input and output
- 🌙 **Dark Mode** — Toggle between light and dark themes
- 💾 **LocalStorage** — Remembers your theme preference

---

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure and layout |
| CSS3 | Styling, Grid, Flexbox, Media Queries |
| JavaScript | Text manipulation and DOM interactions |

---

## 📂 Project Structure

```text
Taha-persian-text-editor/
├── index.html
├── style.css
├── script.js
├── fonts/
│   └── Lalezar-Regular.ttf
├── svg/
│   ├── instagram.svg
│   └── github.svg
└── README.md
```

---

## 🚀 How to Use

1. Open `index.html` in a modern browser.
2. Type or paste Persian text into the textarea.
3. Choose an operation:
   - **تعداد حروف** — Count characters
   - **تعداد کلمات** — Count words
   - **برعکس کردن حروف** — Reverse letters
   - **برعکس کردن کلمات** — Reverse words
   - **کپی** — Copy result to clipboard
   - **ریست** — Clear everything

No installation or build step required.

---

## 🔍 How It Works

The JavaScript code provides six main functions:

1. **`letters()`** — Counts characters using `value.length`
2. **`words()`** — Splits by whitespace (`/\s+/`) and counts
3. **`ReverseLetter()`** — Splits by character, reverses, and joins
4. **`ReverseWord()`** — Splits by whitespace, reverses, and joins
5. **`copy()`** — Uses `navigator.clipboard.writeText()`
6. **`reset()`** — Clears input and output

Dark mode is handled with `localStorage` and a class toggle on the body.

---

## ⚠️ Known Issues

- The `copy()` function uses `alert()` for feedback, which is not ideal for a modern UI.
- The `letters()` function has a typo: `innerTEXT` instead of `innerText` (in the empty check).
- The GitHub link in the footer points to the old username (`Tahamozafari1234`).
- `robots.txt` and `sitemap.xml` currently contain placeholder URLs (`test.com`).

---

## 📱 Responsive Design

| Breakpoint | Layout |
| --- | --- |
| **> 400px** | Default layout |
| **≤ 400px** | Smaller header and buttons |
| **≤ 350px** | 2-column grid for buttons |
| **≤ 300px** | Smaller header font |

---

## 📬 Contact

- **Instagram:** https://instagram.com/taha.mz_dev
- **GitHub:** https://github.com/MozafariDev

---

## 📌 Project Status

This is a learning project. It works as intended, but contains a few known issues (listed above) that may be fixed in future updates. No live demo is available at this time.

---

<p align="center">
  ⭐ Thanks for checking out this project.
</p>
