# Blog-App

This is a blog application that consists of both frontend and backend parts. The frontend is built using Next.js, a React framework, while the backend is built using Nest.js, a Node.js framework.

## Getting Started

To set up and run the application, follow the steps below for both the frontend and backend parts.

### Backend

1. Clone the repository: `git clone https://github.com/Mahmoud-AbouDeghedy/Blog-App.git`

2. Navigate to the `Backend` directory: `cd Backend`

3. Install the dependencies: `npm install`

4. Start the backend server: `npm run start:dev`

The backend server will be running at [http://localhost:3000](http://localhost:3000).

### Frontend

1. Navigate to the `Frontend` directory: `cd Frontend`

2. Install the dependencies: `npm install`

3. Start the development server: `npm run dev`

The application will be running at [http://localhost:3001](http://localhost:3001).

## Features

- The frontend is built using Next.js, which provides server-side rendering and other performance optimizations out of the box.
- The backend is built using Nest.js, a powerful and scalable Node.js framework.
- The frontend and backend communicate with each other using RESTful APIs.
- The application uses MongoDB as the database for storing blog data.

## Folder Structure

The project has the following folder structure:

- `Frontend`: Contains the frontend code.
  - `pages`: Contains the pages of the application.
  - `components`: Contains reusable components.
- `Backend`: Contains the backend code.
  - `src`: Contains the source code of the backend.
    - `main.ts`: The entry point of the backend application.
    - `app.module.ts`: The main module of the backend application.
    - `controllers`: Contains the controllers that handle the API routes.
    - `services`: Contains the services that handle the business logic.
    - `schemas`: Contains the database schemas.
