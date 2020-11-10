const { DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Book = sequelize.define('book', {
    barcode: DataTypes.STRING(30),
    name : DataTypes.STRING,
    price : DataTypes.INTEGER,
    cost : DataTypes.INTEGER,
    isbn : DataTypes.STRING(15)
   
});

// set sync ตาราง book
Book.sync({ alter:true });


module.exports = Book;