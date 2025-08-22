# Neflix-GPT
- React with vite
- implemeted tailwind
- Header
- Router
- Login Form
- Sign up Fprm
- Form validation
- useRef hook
- Firebase setup
- Deploy app to production (need to check)
- Create signup user account
- Implement sign-in user api
- created reduc store with userSlice
- Implemented signout
- update profile api call
- Bugfix redirect user to page as per their loggedIn status
- unsubscribed to the onAuthStateChange callback
- Register for TMDB, create app and get access token
- Get data from TMDB now playing movie api
- Custom hook for now playing movies
- update store with movies data
- create MovieSlice
- Planning for main container and secondary container
- foetch data for trailer video
- update store with trailer video data
- embedded the the video and make it autoplay with mute.
- implemented tailwind classes to make main container looks.
- Added secondary component
- Movielist and MovieCard component
- TMDB image cdn
- usePopular movies custom hook
- GPT search feature
- GPT Search bar
- Multi-language feature
- GPT search
- Open-ai api key
- GPT search api call
- fetched GPT movie suggestion
- from gpt sugeesion fetched movied from TMDB api
- re use movielist component to display movie suggestion containerer
- memoization
- multilingual support
- added env file
- made website responsive

# Features
  - Login/Sign up
    -  sign up page form
    - redirect to Browse page
  - Browse (after authentication)
    - Header
    - Main Movie
      - Trailer in background
      - Title & description
      - Movie suggestions
      - Movie list(scrollable)
- Netflix GPT
    - Search bar
    - Movie suggestion



























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
