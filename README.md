## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME=your database userName`

`DB_PASSWORD=your database password`

`DB_NAME=your database Name`

`DB_HOST=your database IP, ex: localhost:5678 `

`BACKEND_URL=your backend URL, ex: localhost:8080`

`JWT_KEY=your jwt key to encrypt password`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Thai8424/Auth_App_Server.git
```

Go to the project directory

```bash
  cd Auth_App_Server
```

Install dependencies

```bash
  npm install
```

Run migrate for creating database

```bash
  npx sequelize db:migrate  
```

Run migrate for creating database

```bash
  npx sequelize db:seed:all  
```

Start the server

```bash
  npm run dev
```

List available account after run seed:all:
1. email: admin@gmail.com
   password: admin@123
   
2. email: employee@gmail.com
   password: admin@123
