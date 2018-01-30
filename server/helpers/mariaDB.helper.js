"use strict";


const MariaSQLClient = require('mariasql');
const settings = require('../settings');


let MariaDBClient = new MariaSQLClient({
    host: settings.MARIADB.host,
    user: settings.MARIADB.username,
    port: settings.MARIADB.port,
    password: settings.MARIADB.password
});

module.exports = MariaDBClient;