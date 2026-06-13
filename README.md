# 🎨 StyleStudio / Interactive CSS Customizer

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)]()
[![Built With Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Design System](https://img.shields.io/badge/Theme-Geometric%20Balance-4F46E5?style=for-the-badge)]()
[![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C4B6?style=for-the-badge&logo=netlify&logoColor=white)]()

An advanced, high-performance web utility built for frontend developers to visually generate, test, and export pixel-perfect CSS component styles and gradient configurations in real-time.

Instead of a standard informational website, **StyleStudio** is engineered as an interactive browser sandbox focused on optimized runtime performance, semantic architecture, and dynamic layout painting.

---

## 🚀 Live Demo

Experience the sandbox environment live: **[👉 StyleStudio Live Sandbox App](https://tranquil-zuccutto-98a179.netlify.app/)**

---

## ✨ Core Features & Technical Additions

- **Reactive Runtime UI Engine:** Powered entirely by JavaScript event delegation on the `input` lifecycle. It binds all sliders globally to eliminate DOM redraw lag, maintaining a fluid 60 FPS state mutation.
- **Background Color Gradient Engine:** Includes a dynamic background processor featuring instant switching between raw solid hexadecimal values and multi-color `linear-gradient` matrices with an interactive 0–360° rotation wheel.
- **Micro-Controlled Box Model:** Granular sliders to manipulate independent structural vectors including Width, Height, Margin axes ($X$/$Y$), and Padding boundaries ($X$/$Y$).
- **Integrated Box Drop Shadows:** Built-in calculation converter using custom functional utilities (`hexToRgba`) to merge hex tokens, offset parameters, and opacity sliders into structural shadow properties seamlessly.
- **Dynamic Text Processing:** Interactive input node updating string variables inside the viewport canvas alongside custom font sizing, color alignment, and strict physical text positioning.
- **Asynchronous CSS Exporter Terminal:** An built-in terminal mock displaying code with live custom syntax highlighting based on active runtime states, wired directly to the native browser `Navigator.clipboard` API for instant utility.

---

## 🛠️ Tech Stack & Systems Architecture

- **Structure:** Semantic HTML5 layout enforcing standard hierarchy with an interactive `<aside>` console control sheet and a visual `<main>` development board.
- **Styling:** CSS3 Variables and modern Flexbox layouts utilizing an adaptive **Geometric Balance Theme** featuring strict modular scaling and responsive media query fallback breakpoints.
- **Logic:** Vanilla ECMAScript 6 Modules structured via localized object mappings for maximum isolation and clarity.

---

## 📂 Codebase Overview

```text
├── src/
│   ├── index.css      # Design system variables, semantic tokens, and layout declarations
│   └── main.js        # DOM binding selectors, color calculation utility, and style matrix compiler
├── index.html         # Workspace viewports and interactive input forms
└── README.md          # Project technical summary and documentation
