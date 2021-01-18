const express = require('express');
const Datastore = require('nedb');
const nodemon = require('nodemon');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

let dbIndexes = [];
database.find({}, (err, data) => {
    for(var i = 0; i < data.length; i++) {
        dbIndexes.push(i);
    }    
});


// User gets question from database
app.get('/api', (req, res) => {
    database.find({}, (err, data) => {  
        if(err) {
            res.end();
            return;
        } else {
            let availableRecordIndex = Math.floor(Math.random() * dbIndexes.length); // random index number from checkInQuestions array
            let randomRecordIndex = dbIndexes[availableRecordIndex];
            if(dbIndexes.length > 0) {
                res.json(data[randomRecordIndex]);
                dbIndexes.splice(availableRecordIndex, 1);
            } else {
                res.json({available: 'none', text: 'All currently available check-in questions have been displayed.'})
            }
        };
    });
});

//User posts check-in questions to database
app.post('/api', (req, res) => {
    database.insert(req.body);
    res.json({
        status: 'success'
    })
});