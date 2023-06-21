const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://dimasik321:dimasik321@cluster0.skz5cv6.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

// заускаем сервер когда подключились к базе
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
