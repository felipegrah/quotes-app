//controllers/quote-controller.js

// Import the Quote model.

const Quote = require('../models/quote');

//Instantiate the controller object
const quoteController = {};

//Controller method for handling a request for all quotes
quoteController.findAll = (req, res) => {
    //Uses the findAll method from Quote
    Quote.findAll()
    .then(quotes => {
        res.json({
            message: 'Success',
            data: quotes
        });
    })
    .catch(err => {
        // Error
        console.log(err);
        res.status(500).json({err});
    });
};

//Controller method for handling a request for a single quote
quoteController.findById = (req, res) => {
    Quote.findById(req.params.id)
    .then(quote => {
        //Sends the quote as a JSON object
        res.json({
            message: "Success",
            data: quote
        });
    })
    .catch(err => {
        //error
        console.log(err);
        res.status(500).json({err});
    });
};


module.exports = quoteController;
