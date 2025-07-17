#  News Scraper  

A **full-stack news aggregator** built with **React + TailwindCSS (frontend)** and **Node.js + Express + Cheerio (backend)**.  
It allows users to **log in with Google**, view their **profile info**, and browse the **latest headlines** scraped from multiple trusted RSS feeds like **BBC, CNN, Google News, and The Guardian**.  

---

## Features  

- **Google Login** using Google Identity Services  
- **JWT Decoding** → Get user name, email & profile picture  
- **Responsive Navbar** with user info + Logout  
- **Latest Headlines** aggregated from multiple sources  
- **Refresh button** to fetch new random headlines  
- **Express.js API** → Scrapes & merges RSS feeds  
- **CORS enabled** for seamless frontend-backend integration  

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

##  Prerequisites  

Before running, make sure you have installed:  

- [Node.js (v16+)](https://nodejs.org/)  
- npm (comes with Node.js)  
- A **Google Cloud account** for OAuth credentials  

---

##  How to Run

### 1️ Clone / download the project
If you have a ZIP
```bash
unzip news-scraper.zip
cd news-scraper
```

Or clone from GitHub:
```bash
git clone https://github.com/saeemwadkar/news-scraper.git
cd news-scraper
```

### 2 Backend setup
```bash
cd backend
npm install
npm start
```
Backend will start at:
```arduino
http://localhost:5000
```
Available API routes:

/ → Welcome page

/api/scrape → Returns latest headlines as JSON

Example response:

```json
{
  "headlines": [
    {
      "title": "Breaking News Example",
      "link": "https://www.bbc.co.uk/news/article",
      "source": "https://feeds.bbci.co.uk/news/rss.xml"
    },
    {
      "title": "Another Headline",
      "link": "https://www.cnn.com/article",
      "source": "http://rss.cnn.com/rss/edition.rss"
    }
  ]
}
```

### 3 Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```
Frontend will start at:
```arduino
http://localhost:5173
```
