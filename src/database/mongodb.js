const Mongoose = require("mongoose");

const createDbUriFromEnv = () => {

    if (process.env.DBURI != undefined) return process.env.DBURI;

    const dbhost = process.env.DBHOST != undefined ? process.env.DBHOST : 'mongodb';
    const dbport = process.env.DBPORT != undefined ? process.env.DBPORT : '27017';
    const dbname = process.env.DBNAME != undefined ? process.env.DBNAME : 'test';

    return `mongodb://${dbhost}:${dbport}/${dbname}`;

}

const connect = async () => {
    console.log("Connecting to database...");
    try {

        const uri = createDbUriFromEnv();

        await Mongoose.connect(`${uri}`);
        console.log("Connection succesfull");
    } catch (error) {
        console.log("Connection failed", error);
        process.exit(1);
    }
};

/**
 * Disconnect method
 */
const disconnect = async () => {
    try {
        await Mongoose.disconnect();
        console.log("Database disconnected");
    } catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}
