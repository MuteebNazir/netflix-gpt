# 🎬 Netflix GPT

Netflix GPT is a React-based web application inspired by Netflix, enhanced with GPT-powered movie recommendations. It features authentication, protected routes, movie browsing, and an intelligent search experience.

---

## 🚀 Live Demo


---

## 🛠 Tech Stack

- React (Create React App)
- Tailwind CSS
- React Router
- Firebase Authentication
- Firebase Hosting
- TMDB API
- GPT-based recommendations

---

## ✨ Features

### 🔐 Authentication
- Sign Up & Sign In using Firebase
- Email & password validation
- Secure authentication flow
- Redirect based on user login state

### 🏠 Browse Page
- Protected route (only accessible after login)
- Header with navigation & user actions
- Hero section with:
  - Movie trailer in background
  - Movie title & description
- Multiple movie rows:
  - Trending
  - Popular
  - Top Rated
  - Upcoming
- Smooth horizontal scrolling

### 🤖 Netflix GPT
- GPT-powered search bar
- AI-based movie suggestions
- Personalized recommendations

---

## 📂 Project Structure

- Create React App.
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validaion
- useRef Hook
- FireBase Seup
- Deploying our app o production.
- Create SignUp user Account.
- Implement Sign in user Api
- Implement Sign up user Api
- Create Redux Store with userSlice.
- Implemented Sign Out
- Update Profile
- Fetch From TMDB Movies.
- BugFix: Sign up user displayName and profile update.
- BugFix: if the user is not logged in redirect /browse to login page and vice-versa.
- Unsubcribed to the onAuthStateChanged callback.
- Add hardcoded values to the constant files.S
- Register TMDB API & create an APP & get acess token.
- Get data from TMDB now playing Movies list API.
- Custom Hook for Now Playing movies.
- Create movieSlice
- Update Store with movies Data
- Planing for mainContainer & secondary container
- Fetch Data for Tailer Video
- Embedded the Youtube Video and make it autoplay and mute
- Tailwind Classes to make Main container look Good
- Build Secondary Component
- Build Movie List
- Build Movie Card
- UsePopularMovies Custom Hook
- UseTrendingMovies Custom hook
- UseUpcomingMovies Custom Hook
- GPT search Page.
- GPT Search Bar.
- Multi- Language Feature in our App
- 