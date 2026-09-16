# MovieExplorer 

Hey there! Welcome to MovieExplorer. This is a clean, simple, and fully responsive web application built with React and Tailwind CSS. It connects to the TVMaze API so users can browse popular TV shows, search for their favorite titles, and view deep-dive details inside an interactive modal.

I built this project as part of a course assignment to practice state management, API integration, and responsive design layouts.

---

##  Features

- **Home Page:** Features a welcoming Hero banner with a clear Call-To-Action (CTA) that brings you straight to the movie list.
- **Movie Listing Page:** A beautiful, responsive grid displaying movie cards along with a dynamic search bar.
- **Live Search:** Type in any title, and the app instantly queries the TVMaze API to update the grid.
- **Detailed Modal View:** Clicking "See Details" triggers an overlay modal showing the poster, release date, rating, genres, and a short summary.
- **Responsive Layout:** Works flawlessly across all screen sizes (stacks into a single column on mobile, expands into a multi-column grid on desktop).

---

##  Tech Stack Used

- **Frontend Core:** React (Scaffolded using Vite for faster development)
- **Routing:** React Router (For smooth, seamless page switching)
- **Styling:** Tailwind CSS (For quick, modern, and utility-first styling)
- **Data Source:** TVMaze API (Public, free API for show data)

---

##  Getting Started

If you want to run this project locally on your machine, just follow these quick steps:

1. Clone this repository to your local computer:
   ```bash
   git clone https://github.com/Habib-Brainbox/Next-Level-Foundation-Program-Assignment-2-movie-explorer
   ```

2. Navigate into the project folder:
   ```bash
   cd movie-explorer
   ```

3. Install all the necessary dependencies:
   ```bash
   npm install
   ```

4. Start up the local development server:
   ```bash
   npm run dev
   ```

Now open up your browser and head over to `http://localhost:5173` (or whatever port shows up in your terminal) to check it out!

---

##  API Reference

This app fetches all its data directly from the **TVMaze API** using two primary endpoints:

- **Fetch Initial Shows:** `GET https://api.tvmaze.com/shows`
- **Search for Specific Shows:** `GET https://api.tvmaze.com/search/shows?q=:query`

---

## How the Code is Organized

Here is a quick look at the project folder setup inside the `src` folder:

```text
src/
 ├── assets/        # Visual assets and images
 ├── components/    # Reusable UI parts (Navbar, Footer, MovieCard, MovieModal)
 ├── pages/         # Page components (Home, MovieListing)
 ├── App.jsx        # Main application component & routes
 └── main.jsx       # App entry point
```

---

##  Live Demo

You can view the live, deployed version of this application right here:
(https://next-level-foundation-program-assig.vercel.app/)

---

##  License

This repository was created strictly for educational purposes as part of a course assignment.
