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
```bash
news-scraper/
 ├── frontend (client)/         # React + Tailwind frontend
 │   ├── src/
 │   │   ├── components/        # Reusable UI components
 │   │   │   ├── Login.jsx      # Google login
 │   │   │   ├── Navbar.jsx     # Shows logged-in user info
 │   │   │   └── Headlines.jsx  # Displays fetched headlines
 │   │   ├── App.jsx            # Handles login state
 │   │   └── main.jsx           # React entry point
 │   ├── tailwind.config.js     # TailwindCSS config
 │   └── package.json           # Frontend dependencies
 │
 ├── backend (server)/          # Node.js + Express backend
 │   ├── server.js              # Express API + RSS scraper
 │   └── package.json           # Backend dependencies
 │
 └── README.md                  # Documentation
```

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

### 4 Google 0Auth Setup
1. Go to Google Cloud Console → Create a new project
2. Enable OAuth 2.0 Client ID → Web Application
3. Add http://localhost:5173 as an Authorized JavaScript origin
4. Copy your Client ID
5. Open:
```bash
frontend/src/components/Login.jsx
```
6. Replace this line:
```javascrpt
const clientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
```
with your actual Google OAuth client ID.
Now when you visit the app, you’ll see a **Google Login button**.

---
## How it works
1️. User opens the app → sees Google login screen
2️. On login, the Google JWT is decoded → user info (name, email, picture) is stored
3️. Navbar shows user details & logout button
4️. Headlines component calls http://localhost:5000/api/scrape
5️. Backend scrapes RSS feeds → merges & shuffles → sends JSON
6️. User sees latest headlines with links
7️. Clicking Refresh fetches new random headlines

---

## How to Test
1. Login with Google → See your name, email & picture
2. Check headlines loaded from multiple sources
3. Click Refresh → Fetch new random headlines
4. Logout & login again
5. Try backend API directly at http://localhost:5000/api/scrape

---

## Future Improvements
- Persist session in localStorage
- Add category filters (Tech, Sports, Politics)
- Deploy backend to Render/Heroku & frontend to Netlify
- Cache RSS responses for better performance
- Add infinite scroll for more headlines

---

## Author
Saeem Wadkar

---

## Notes
- This project uses RSS feeds so headlines are always fresh.
- Google login requires OAuth Client ID from Google Cloud Console.
- You can easily deploy backend & frontend separately for production.
