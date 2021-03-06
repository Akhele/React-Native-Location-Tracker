require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');



const app = express();

app.use(bodyParser.json());
app.use(authRoutes);



const mongoUri = 'mongodb+srv://admin:Just-6226@cluster0.o3jjj.mongodb.net/<dbname>?retryWrites=true&w=majority';
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

app.get('/',requireAuth, (req,res) => {
    res.send(`your Email : ${req.user.email}`);
    
});

app.listen(3000, () => {
    console.log("Lestening..");
});