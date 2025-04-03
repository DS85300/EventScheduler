# Event Scheduler

A modern event scheduling application built with React and Vite.

## Features

- **Home Page**: Display a list of events as cards with key information
- **Event Details**: View detailed information about specific events
- **Create Event**: Form to create new events
- **Login System**: User authentication
- **Responsive Design**: Works on all screen sizes

## Tech Stack

- React 19
- Vite 6.2.0
- React Router DOM 7.4.1
- Tailwind CSS with DaisyUI
- ESLint for code quality

## Project Structure

```
src/
├── components/
│   ├── EventCard.jsx      # Reusable event card component
│   ├── Layout.jsx         # Main layout component
│   └── Navbar.jsx         # Navigation component
├── pages/
│   ├── Home.jsx           # Home page with event list
│   ├── EventDetails.jsx   # Event details page
│   ├── CreateEntry.jsx    # Create event form
│   └── LogIn.jsx          # Login page
└── utils/                 # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
