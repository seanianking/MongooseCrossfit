const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/crossfit", {
  useNewUrlParser: true,
  useFindAndModify: false
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// routes
require("./routes/APIRoutes")(app);
require("./routes/HTMLRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
