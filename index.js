const server = require("./api/server.js");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
