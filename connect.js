const { Sequelize } = require('sequelize');

const db = 'db_sequelize';
const user = 'postgres';
const pass = '1234';
const host = 'localhost';
const port = '5432';

const db_type = 'postgres';

const sequelize = new Sequelize(db, user, pass, {
    host,
    port,
    dialect: db_type
});

module.exports = sequelize;