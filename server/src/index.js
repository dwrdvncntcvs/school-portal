const expressApp = require("./app");
const { createConnection } = require("./configs/db");
const { PORT, DB_URI } = require("./constants");

createConnection(DB_URI);

expressApp.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
    console.log(`> http://localhost:${PORT}`);
});
