const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const config = require('./config');
const User = require('./models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const checkout = require('./models/checkout')
const cart = require('./models/cart');
const dishes = require('./models/dishes');
const cors = require ('cors');


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

config.authenticate().then(function(){
    console.log('database connected');
}).catch(function(err){
    console.log(err);
});
// registration and login
app.post('/register', function(req, res){

    let plainPassword = req.body.password;

    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
        
        let user_data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        };

        User.create(user_data).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });

    });    
});

app.post('/login', function(req, res){

    let email = req.body.email;
    let password = req.body.password;
    let user_data = {
        where: {email} // {email: email}
    }

    //Find a user that corresponds to the email
    User.findOne(user_data).then((result) => {

        if(result){
            console.log(result);
            bcrypt.compare(password, result.password, function(err, output) {
                console.log(output);
                if(output){
                    res.status(200).send(result);
                }else{
                    res.status(400).send('Incorrect password.');
                }
            });            
        }
        else{
            res.status(404).send('User does not exist.');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
        
});

// manage dishes

app.get('/' , function(req , res) {
    dishes.findAll().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.status(400).send(err);
    });
});
app.get('/id/:id' , function(req , res) {
    dishes.findByPk((req.params.id)).then(function(result){
        res.send(result)
    }).catch(function(err){
        res.status(400).send(err);
    });
});

app.post('/addDish', function (req, res) {
    let data = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        calories: req.body.calories,
        image:req.body.image
        
    };
    dishes.create(data).then(function (result) {
        res.redirect('/');

    }).catch(function (err) {
        res.status(400).send(err);
    });
});
app.get('/allItems' , function(req , res) {
    cart.findAll().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.status(400).send(err);
    });
});

app.post('/addToCart', function (req, res) {
    let data = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image:req.body.image
        
    };
    cart.create(data).then(function (result) {
        res.status(200).send(result)

    }).catch(function (err) {
        res.status(400).send(err);
    });
});
app.delete("/itemCart/delete/id/:id", (req, res) => {
    cart.findByPk(req.params.id).then((result) => {
        // result.title = req.body.title;
        // result.price = req.body.price;
        // result.description = req.body.description;
        // result.calories = req.body.calories;

        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete dish");
        });
    }).catch(() => {
        res.status(500).send("Could not delete dish");
    });
});
// app.put('/id/:id', function (req, res) {
//     let id = req.params.id;
//     // find the dish that corresponds to the id on the url
//     dishes.findByPk(id).then(function (result) {
//         console.log(result);
//         result.title = req.body.title;
//         // save update to db
//         result.save().then(function () {
//             res.redirect('/')
//         }).catch(function (err) {
//             res.status(400).send(err);
//         });
//     }).catch(function (err) {
//         res.status(400).send(err);
//     });

// })
app.put("/dishes/update/id/:id", (req, res) => {
    dishes.findByPk(req.params.id).then((result) => {
        result.title = req.body.title;
        result.price = req.body.price;
        result.description = req.body.description;
        result.calories = req.body.calories;
        result.image = req.body.image;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update dish");
        });
    }).catch(() => {
        res.status(500).send("Could not update dish");
    });
});

app.delete("/dishes/delete/id/:id", (req, res) => {
    dishes.findByPk(req.params.id).then((result) => {
        // result.title = req.body.title;
        // result.price = req.body.price;
        // result.description = req.body.description;
        // result.calories = req.body.calories;

        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete dish");
        });
    }).catch(() => {
        res.status(500).send("Could not delete dish");
    });
});
app.post('/checkout', function (req, res) {
    let data = {
        title: req.body.title,
        price: req.body.price,
        quantity: req.body.quantity,
        total: req.body.total,
        description: req.body.description,
        image:req.body.image,
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city
        

    };
    checkout.create(data).then(function (result) {
        res.status(200).send(result)

    }).catch(function (err) {
        res.status(400).send(err);
    });
});
app.get('/checkout/orders' , function(req , res) {
    checkout.findAll().then(function(result){
        res.send(result)
    }).catch(function(err){
        res.status(400).send(err);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(` Server started on port ${PORT}`));