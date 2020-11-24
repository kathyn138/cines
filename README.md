# Cines

Cines is my submission for YearOne's API Design coding challenge. 

Cines is a movie searching app that users can use to search 
for and vote on movies. Cines is built with React and Express. 
Movie voting data is stored on a PostgreSQL database. 

I used [OMDb API](http://www.omdbapi.com/) to obtain movie data. The design 
and aesthetic of Cines was inspired by 
[a design on Behance](https://www.behance.net/gallery/102849659/Movies-App-Concept).

![Demo](frontend/src/assets/demo.gif)

## Table of Contents

- [Installation](https://github.com/kathyn262/cines#installation)
- [Technologies](https://github.com/kathyn262/cines#technologies)
- [Component Hierarchy](https://github.com/kathyn262/cines#component-hierarchy)
 
## Installation
To load data from SQL file into a database: 
```
cd backend
createdb cines
psql cines < data.sql
```
To set up API Key in backend: 
```
cd backend
touch .env
```
Paste `API_KEY=YOUR_KEY_HERE` into the `.env` file with the API key in place of `YOUR_KEY_HERE`

Use npm to install dependencies and start servers for the frontend and backend. 

Backend Setup: 
```
cd backend
npm install
npm start
```

Frontend Setup: 
```
cd frontend
npm install 
npm start
```

## Technologies 
- React
- Create-React-App
- HTML/CSS
- Bootstrap
- Axios
- Express
- PostgreSQL

## Component Hierarchy

```
App
└─┬ Routes
  ├── Home
  ├── MovieDetails
  ├─┬ MovieList
  │ ├── MovieCard
  │ └── SearchBar
  └── NavBar  
```