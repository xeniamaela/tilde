const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors')

// Server
const app = express();
const PORT = process.env.PORT || 3000;

//Routes


// Initialize Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://xeniamaela:Xoden_101@cluster0.padkt.mongodb.net/Tilde?retryWrites=true&w=majority',
    {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to database.'))
    .catch(err => console.log(err));

// Use Routes
