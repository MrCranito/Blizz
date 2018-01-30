"use strict";


const pg = require('pg');
const cfenv = require('cfenv');
const settings = require('../settings');
const logger = require('./logger.helper');

let appEnv = cfenv.getAppEnv();

let conString = settings.ELEPHANTSQL.host;

let ElephantSQLClient = new pg.Client(conString);

ElephantSQLClient.connect((err) => {
    if(err) {
        return logger.info("could not connect to postgres ", err);
    }
});

module.exports = ElephantSQLClient;