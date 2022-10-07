const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middlewares
app.use(bodyParser.json());
// app.use('/posts', () => {
//     console.log('this is middleware running');
// });

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// app.get('/posts', (req, res) => {
//     res.send('We are on posts');
// });

//Connect to DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.hwwwwmv.mongodb.net/test', () => 
    console.log('connected to db')
);

//How to we start listening to the server
let port = process.env.PORT;
if(port === null || port === "")
{
    port = 3000;
}
app.listen(port);