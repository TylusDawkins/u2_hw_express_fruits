# 🍍🍇🍐 Express Fruits 🍓🍌🥭

![fruit](https://s3.amazonaws.com/secretsaucefiles/photos/images/000/104/044/large/fruit-dancing-gif.gif?1485312342)

## Overview

It's time to get some practice setting up an express server and writing a few routes.  Feel free to test these routes either with the browser's navbar, a small `node` script using `axios` or a toy react app with connected with `axios`. We'll also be working with the data array in `fruits.js` to practice our routes.

## Getting Started

- `Fork` and `clone` this repo
- `cd` into the repo
- `touch index.js` to create an entry point for your server
- Run `npm init -y` to initialize your project as a `Node.js` project
- Install express and nodemon with `npm i express nodemon`
- Add a `start` script to `package.json` that will run nodemon on your server entry point:
	```js
	"scripts": {
		"start": "nodemon index.js"
	}
	```

## Instructions
### Set up an Express server

Let's write the boilerplate for an express server:

- First, import `express` by requiring it at the top of `index.js` with:
	```js
	const express = require('express');
	```
- Next, import `fruits` from fruits.js. 
	```js
	const fruits = require('./fruits');
	```
- Go ahead and define a `PORT` constant variable: 
	```js
	const PORT = process.env.PORT || 8000;
	```
- Init an `app` instance below your initial imports:
	```js
	const app = express();
	```
- You may want to create some space between your app instance and the step below since we'll be writing routes in between them shortly.
- Finally, bind the app to a port with `app.listen()` at the bottom of the file:
	```js
	app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
	```

Now start the server from the terminal with `npm start`. If all goes well, you should see the message from the console log above in the console.  _Don't stop the server until you are done writing code or unless you just want to restart it._ If you save the `index.js` file the server should automatically re-load the changes and restart since we're using `nodemon` in our start script in `package.json`.

___
### Adding Routes

Start off by defining a simple ping-pong `GET` route:

```js
app.get('/ping', (req, res) => {
	res.json('pong');
})
```

Try to test this route out by navigating to `http://localhost:8000/ping` with your web browser.
- Alternatively, you could test this route by using a tool like [Insomnia](https://insomnia.rest/) to make a `GET` request to the same URL.

Now that's what I call computer ping-pong!


#### `/greet/:name`

`GET` `/greet/:name` should return a greeting with the supplied name, e.g., 'Why hello there, <name>!'

Recall you can access the url parameters with `req.params`


#### `/five`

`GET` `/five` should return an array of the numbers from 1-5


#### `evens`
`GET` `/evens/:n` should return an array of even numbers from 2 up to and including `n`.  So when you call this route, `n` in the url should be a number.

Also, you may need to use `parseInt` to cast the supplied `n` parameter to a number


#### `/namelength/:name`

`GET` `/namelength/:name` should return the length of the supplied name

___
### Fruit Routes
#### `/fruits`

`GET` `/fruits` should return an array with all the fruits.

Let's add a route that retrieves all the fruits from our `fruits.js` file. Recall we imported it on top of our `index.js`.

```js
app.get('/fruits', (req, res) => {
  //your code here 
  res.send()
})
```


#### `/fruits/:name`

Now let's add a route that takes a route parameter `name` and retrieves the fruit that matches the supplied name. 
```js
app.get('/fruits/:name', (req, res) => {
  //your code here
  // HINT - you can use a higher-order array method 
})
```

Recall you can access the url parameters with `req.params`.
So when you call this route, `name` in the url should be a **capitalized** string(refer to `fruits.js`, if you are unsure).

___
## Bonus 

`GET` `/fruits/sort` should return the fruits array sorted alphabetically using `.sort`. 

```js
app.get('/fruits/sort', (req, res) => {
  // implement sort

  res.send()
})
```

