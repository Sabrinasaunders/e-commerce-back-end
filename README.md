# Object-Relational Mapping (ORM): E-Commerce Back End

## Description

The task of this project is to take the back end for an e-commerce site, take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Developement
This project is still in works. I added models and their requirements into the database. I also executed the association methods on my Sequelize models to create relationships between them. What is yet to be completed is filling out the API Routes to perform RESTful CRUD Operations, and a walkthrough video showing how to create the schema from the MYSQL shell, how to seed the database from the command line, how to start the application's server and the GET, POST, PUT, DELETE routes being tested in Insomnia. 

## Credits

Starter code provided by UC Berkeley Coding Bootcamp.