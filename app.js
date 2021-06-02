const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "connected with the app" });
});

app.use("/programming-languages", programmingLanguagesRouter);

// error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => console.log(`app listening at localhost:${port}`));
