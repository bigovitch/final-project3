const Sequelize = require('sequelize');
const config = require('./../config');
const cart = config.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    totalprice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, { timestamps: false });

module.exports = cart;