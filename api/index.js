const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();
const app = express();
const port = 8800;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfully"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app. use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
