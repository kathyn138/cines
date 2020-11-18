/** Database connection for Cines. */

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql:///cines");

client.connect();


module.exports = client;
