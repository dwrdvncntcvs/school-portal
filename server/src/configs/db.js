const { connect } = require("mongoose");

const createConnection = async (dbUri) => {
    try {
        const connectionData = await connect(dbUri);
        console.log(
            `Connected to Database: ${connectionData.connection.db.databaseName}`
        );
    } catch (err) {
        console.log("Database Connection Failed...");
    }
};

module.exports = {
    createConnection,
};
