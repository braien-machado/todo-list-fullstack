# To Do List
This project is a simple to-do-list page that connects with a backend to store the tasks in a MySQL database.

## Sumary
- [Description](#to-do-list)
- [Getting started](#getting-started)
    - [Backend](#backend)
    - [Frontend](#frontend)

## Getting Started
1. Clone the repository
-  `git clone git@github.com:braien-machado/todo-list-fullstack.git`


 2. Go to the cloned repository
-  `cd todo-list-fullstack`
 
> Note that the repository has an "app" directory that has two folders, "backend" and "frontend". In the next steps, you'll need to be inside them.

### Backend


1. Inside backend folder install dependencies
 - `npm install`

2.  Make sure you have [MySQL](https://www.mysql.com/downloads/) installed and running

3. Create a `.env` file and add the needed environment variables to connect to your mysql server. You can also rename `.env.example` file and change the values inside it.

  - `HOSTNAME=your_host_name`
  - `MYSQL_USER=your_mysql_user`
  - `MYSQL_PASSWORD=your_mysql_password`
  
5.   Create  _database_  and execute  _migration_  files
   -   `npx sequelize-cli db:create && npx sequelize db:migrate`
   
6.  Start API

-   `npm start`

7. Check if it's working by searching in your browser for `localhost:3001/task`. If you changed the `PORT` in `.env`, change 3001 to your new `PORT` value. By now, the browser will show just an empty array
- `[]`

### Frontend
1. You need to keep a terminal with the backend running, so open a new terminal to follow the next steps

2.  Inside frontend folder install dependencies
 - `npm install`
   
2.  Start the React App

-   `npm start`

3. If a new page with the app didn't open, search for `localhost:3000` in your browser 

4. Add a new task and have fun!
