const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);

const mongoUri = 'xxx';
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',() => {
    console.log('connected to mongo instance')
});

mongoose.connection.on('error', (err)=>{
    console.error('Error connecting to mongo', err);
})

app.get('/', (req,res) => {
    res.send('Hi There!');
});

app.listen(3000, () => {
    console.log("Lestening..");
});