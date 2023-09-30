const app = require("./app");
const mongoose = require("mongoose"); //!LAZEM Mongoose @5

const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful!");
  });

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
