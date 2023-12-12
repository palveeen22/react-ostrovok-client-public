const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./Routes/Router");
const ErrorHandler = require("./Middlewares/ErrorHandller");

//.env
// dotenv.config();

//port
const port = 3000;

//middleware
app.use(cors());
app.use(express.json());

//body-parser
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", router);

// error handler
app.use(ErrorHandler);

//port
app.listen(port, () => {
  console.log(`🚀 Server running in port ${port}`);
});
