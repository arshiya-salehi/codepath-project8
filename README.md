# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚀 Crewmates Web App

This project is part of **CodePath Web Development 103 – Week 8 Project (Project 7: Crewmates)**.  
It is a custom web application that allows users to **create, update, view, and delete (CRUD)** team members ("Crewmates") for any themed game or group.

Users can design their own team, assign attributes to each crewmate, and view them in a sortable gallery. Each crewmate also has a unique detail page and edit functionality.

---

## ✨ Features

### ✅ Required Features
- [x] **Create new crewmates** via a form (name + attributes).
- [x] **View all crewmates** on a summary page (sorted by creation date, newest first).
- [x] **Edit crewmates** to update their attributes in real-time.
- [x] **Delete crewmates** from the summary page.
- [x] **Unique detail page** for each crewmate with extra information.
- [x] **Navigation** from detail → edit → summary.

### 🌟 Stretch Features (Optional Enhancements)
- [ ] Assign categories (e.g., RPG class, dev team role) that restrict attribute options.
- [ ] Display crew statistics (e.g., % of crewmates with a given attribute).
- [ ] Show a custom **"success metric"** for the team.

---

## 🛠️ Technologies Used
- **React (Vite)** → Frontend framework
- **JavaScript (ES6+)**
- **Supabase** → Backend database & authentication
- **supabase-js** → API client for database operations
- **CSS** → Styling and layout
- **Git & GitHub** → Version control
- **Node.js & npm** → Development environment

---

## 📂 Project Structure
codepath-project8-main/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── public/
│ └── vite.svg
└── src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── supabaseClient.js
├── assets/
│ └── react.svg
├── components/
│ ├── CrewmateCard.jsx
│ ├── CrewmateDetail.jsx
│ └── CrewmateForm.jsx
├── pages/
│ ├── Create.jsx
│ ├── Detail.jsx
│ ├── Home.jsx
│ └── Update.jsx
└── styles/
└── styles.css

yaml
Copy code

---

## ⚙️ Setup & Run Instructions

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- npm (comes with Node.js)

### 2️⃣ Install Dependencies
```bash
npm install
3️⃣ Start Development Server
bash
Copy code
npm run dev
The app will be available at: http://localhost:5173

4️⃣ Configure Supabase
Create a project at Supabase.

Add a supabaseClient.js file with your API keys (already included in the project structure).

Ensure your database schema matches the required crewmates table.

🎯 Learning Goals
By completing this project, you will:

Gain experience with Supabase for database + API integration.

Learn to implement full CRUD operations in a React app.

Practice building a multi-page app with reusable components.

Manage state and UI updates across create, read, update, and delete workflows.

📸 Screenshots
Replace with your own screenshots or GIF walkthrough

Home Page

Create Crewmate

Crewmate Gallery

Crewmate Details

Update Crewmate

📚 Resources
Supabase Documentation

supabase-js Docs

Vite Documentation

👩‍💻 Author
Developed as part of CodePath Web Development 103 coursework.

perl
Copy code
 ​:contentReference[oaicite:0]{index=0}​







Ask ChatGPT

