# To Do List

## Heroku backend endpoint:``

## Local endpoint:`http://localhost:8080/`

### 1 Clone this repository using:

`git clone https://github.com/BeyFaith/to_do_list.git`

### 2 Cd into this repo

`cd to_do_list`

### 3 Install all dependencies

`npm install`

### 4 Setup Dotenv

- Create .env file in project root directory
- Copy keys in .env-example file, which is in the project root directory and assign values to those keys.

### 5 Running Migrations

`sequelize db:migrate`

### 6 Running Seeders

`sequelize db:seed:all`

### 7 Start the server by running

`npm run start` or `npm run dev`

### Task model

```json
{
  "Task": "Task"
}
```

### Endpoints

- Creating a task: `api/create`
- Getting all tasks: `api/tasks`
- Getting one task:`api/tasks/:id`
- Updating a task:`api/tasks/:id`
- Deleting a task: `api/tasks/:id`
