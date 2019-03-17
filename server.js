const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./app/routes/htmlRoutes.js")(app);
require("./app/routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:"+PORT);
});
