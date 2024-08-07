# Todo App

A simple and efficient Todo application built with React and Node.js, backed by MongoDB. Made this while I was learning react.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update todos
- Mark todos as completed
- Responsive design
- Backend validation using Zod
- Cross-Origin Resource Sharing (CORS) enabled

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mridxl/todo-app.git
    cd todo-app
    ```

2. Install backend dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```sh
    cd ../frontend
    npm install
    ```

## Usage

1. Start the backend server:

    ```sh
    cd backend
    node index.js
    ```

2. Start the frontend application in a separate terminal

    ```sh
    cd frontend
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:{port}` to see the application.

## API Endpoints

### Create a Todo

- **URL**: `/todos`
- **Method**: `POST`
- **Body**: `{ "description": "your todo description" }`

### Get All Todos

- **URL**: `/todos`
- **Method**: `GET`

### Update a Todo as Completed

- **URL**: `/completed`
- **Method**: `PUT`
- **Body**: `{ "id": "todo_id" }`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.
