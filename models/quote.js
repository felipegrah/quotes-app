// models/quotes.js

//Import the database

const db = require('../db/config')

//Instantiate a new Object
//This will interface the quotes-app database.
//Specifically the quotes table.

const Quote = {};

// Define methods for the Quote object

// Return all quotes from the table
Quote.findAll = () => {
    return db.query(
        `SELECT * FROM quotes`
    );
};

Quote.findById = (id) => {
    return db.oneOrNone(
        `
            SELECT * FROM quotes
            WHERE id = $1

        `,
        [id]
    );
};

//Export the Quote object
module.exports = Quote;


