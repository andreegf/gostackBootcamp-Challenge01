# Rocketseat's Gostack Bootcamp - Challenge 01

## About the Challenge
This Challenge is the first of @Rocketseat Gostack Bootcamp. The challenge is about creating a simple CRUD application using [Node.JS](https://nodejs.org/en/) and [Express](https://expressjs.com)

You can check the Challenge Repo [here](https://github.com/Rocketseat/bootcamp-gostack-desafio-01)

## Version
This repo is currently on version **1.0**

## Techs Used

* [Node.JS](https://nodejs.org/en/);
* [Express](https://expressjs.com);
* [Nodemon](https://nodemon.io/).

## How to Run it?
1. Clone this repo 
2. Run ```npm install``` or ```yarn install``` to download the dependencies
3. Run ```npm run dev``` or ```yarn dev``` to start a development server on PORT 3000

## Middlewares
This project run two middlewares:

1. Globally used to count the number of requisitions made in the current run, and log them in the console;
2. Used in routes that receive the ID parameter, to check if the ID matches one in the Projects array;

## Examples

### Creating a new project

Send a **POST** request to ```http://localhost:3000/projects``` following the example below:
```
{
	"id":"1",
	"title":"Example Project"
}
```

The result should return the project you created.


### Adding a task to an existing project

Send a **POST** request to ```http://localhost:3000/projects/:id/tasks```  where **:id** should be the id of an already created project, following the example below:
```
{
	"title":"Example Task"
}
```

The result should return the project with the task you added.

### Get a list of projects

Send a **GET** request to ```http://localhost:3000/projects```  
The result should return an array list of projects following the example below:

```
[
	{
		"id":"1",
		"title":"Example Project",
		"tasks":[
			Example task
		]
	},
	{
		"id":"2",
		"title":"Second example Project",
		"tasks":[
			Second example task
		]
	}
]
```

### Edit a project's title

Send a **PUT** request to ```http://localhost:3000/projects/:id```  where **:id** should be the id of an already created project, following the example below:
```
{
	"title":"Updated Project title"
}
```

The result should return the project with the new title.

### Delete a project

Send a **DELETE** request to ```http://localhost:3000/projects/:id```  where **:id** should be the id of an already created project.

The result should return an array with the remaining projects.
