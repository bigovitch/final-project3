const Sequelize = require('sequelize');
const config = require ('./../config');
const checkout = config.define('checkout' , {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
        },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
        },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:true,
            },
    total:{
        type:Sequelize.INTEGER,
        allowNull:false,
                },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        },
    image:{
        type:Sequelize.STRING,
        allowNull:true,
            },
    name:{
    type:Sequelize.STRING,
    allowNull:true,
            },
    email:{
    type:Sequelize.STRING,
    allowNull:true,
             },
             city:{
                type:Sequelize.STRING,
               allowNull:true,},
    address:{
     type:Sequelize.STRING,
    allowNull:true,
                         },       
},{timestamps:false});

module.exports = checkout;