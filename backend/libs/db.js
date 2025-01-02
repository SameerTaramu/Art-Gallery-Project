const mongoose = require("mongoose");
function connectDb(app) {
  console.log("starting");
  mongoose
    .connect(
      "mongodb+srv://sameertaramu1:sameer9801@node-api.ayu5x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Node-API"
    )
    .then(() => {
      console.log("Connected To Database!");
      app.listen(3000, () => {
        console.log("server is running on port 3000");
      });
    })
    .catch((err) => {
      console.log("connection failed!", err);
    });
}
module.exports = connectDb;
