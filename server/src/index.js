const expressApp = require("./app");
const { PORT } = require("./constants");

expressApp.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
    console.log(`> http://localhost:${PORT}`);
});
