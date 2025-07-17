#  News Scraper  

A **full-stack news aggregator** built with **React + TailwindCSS (frontend)** and **Node.js + Express + Cheerio (backend)**.  
It allows users to **log in with Google**, view their **profile info**, and browse the **latest headlines** scraped from multiple trusted RSS feeds like **BBC, CNN, Google News, and The Guardian**.  

---

## Features  

✅ **Google Login** using Google Identity Services  
✅ **JWT Decoding** → Get user name, email & profile picture  
✅ **Responsive Navbar** with user info + Logout  
✅ **Latest Headlines** aggregated from multiple sources  
✅ **Refresh button** to fetch new random headlines  
✅ **Express.js API** → Scrapes & merges RSS feeds  
✅ **CORS enabled** for seamless frontend-backend integration  

---

##  Tech Stack  

### **Frontend**  
- React.js (Vite)  
- TailwindCSS  
- Axios  
- jwt-decode  
- Lucide-react Icons  

### **Backend**  
- Node.js  
- Express.js  
- Axios  
- Cheerio (RSS parsing)  
- CORS  

### **News Sources**  
- BBC News  
- CNN News  
- Google News  
- The Guardian  

---

## Project Structure  
📦 news-scraper
┣ 📂 client (frontend)
┃ ┣ 📂 src
┃ ┃ ┣ 📂 components
┃ ┃ ┃ ┣ Login.jsx # Google OAuth login
┃ ┃ ┃ ┣ Navbar.jsx # Shows logged-in user info
┃ ┃ ┃ ┗ Headlines.jsx # Displays fetched headlines
┃ ┃ ┣ App.jsx # Manages login state
┃ ┃ ┗ main.jsx
┃ ┣ tailwind.config.js
┃ ┗ package.json
┣ 📂 server (backend)
┃ ┣ server.js # Express API + RSS scraper
┃ ┣ package.json
┗ README.md


---

## ✅ Prerequisites  

Before running, make sure you have installed:  

- [Node.js (v16+)](https://nodejs.org/)  
- npm (comes with Node.js)  
- A **Google Cloud account** for OAuth credentials  

---

## ⚙️ Setup Guide  

Follow these steps to run the project **locally**:  

---

### 1️ Clone the repository  

```bash
git clone https://github.com/saeemwadkar/news-scraper.git
cd news-scraper
