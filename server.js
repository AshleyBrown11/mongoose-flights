require('dotenv').config();
//Dependencies
const mongoose = require('mongoose');
const Flight = require('./models/flight');
// const Destination = require('/models/destination')
const express = require('express');
const app = express( );
const PORT = process.env.PORT || 3000; 


// Global Configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jsxViewEngine = require('jsx-view-engine');

// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));


// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
//   db.close();
// }, 5000);


app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

// Middleware
app.use(express.urlencoded({ extended: false }));

//////////////////////////

// Index
app.get('/flight', async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    console.log(foundFlight);
    res.status(200).render('Index', {
      flight: foundFlight
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Index Part 2 Destination
app.get('/destination', async (req, res) => {
  try {
    const foundDestination = await Destination.find({});
    console.log(foundDestination);
    res.status(200).render('Index', {
      destination: foundDestination
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get('/flight/new', (req, res) => {
  console.log('New controller');
  res.render('New');
});

// New Part 2 Destination
app.get('/destination/new', (req, res) => {
  console.log('New controller');
  res.render('New');
});

// Create
app.post('/flight', async (req, res) => {
  try {
    
   const createdFlight = await Flight.create(req.body);
    // res.status(201).send(createdFlight)
    res.status(201).redirect('/flight');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit
app.get('/flight/:id/edit', async (req, res) => {
  try {
    // find the document in the database that we want to update 
    const foundFlight = await Flight.findById(req.params.id);
    res.render('Edit', {
      flight: foundFlight 
    })
  } catch (err) {
    res.status(400).send(err);
  }
})

// Show
app.get('/flight/:id', async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);

    //second param of the render method must be an object
    res.render('Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      flight: foundFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});









