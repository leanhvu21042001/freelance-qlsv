const express = require("express");
const cors = require("cors");

const facultiesRoute = require("./modules/faculties/faculties.route");
const classesRoute = require("./modules/classes/classes.route");
const studentsRoute = require("./modules/students/students.route");

const errorHandler = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

const app = express();
const port = 5000;

// setup middleware
app.use(cors());
app.use(express.json());

// setup routes
app.use("/faculties", facultiesRoute);
app.use("/classes", classesRoute);
app.use("/students", studentsRoute);

// error handling
app.use(notFoundMiddleware);
app.use(errorHandler);

// run app
app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
