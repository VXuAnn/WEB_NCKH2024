const express = require("express");
require('dotenv').config();
const path = require('path');
const database = require("./config/database");
database.connect();

const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");
const systemConfig = require("./config/system");

const app = express();
const port = process.env.PORT;

app.set("view engine", "pug"); // Đặt Pug làm template engine
app.set("views", path.join(__dirname, "views")); // Cấu hình đường dẫn đến thư mục views

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.use(express.static('public'));
routeAdmin.index(app);
routeClient.index(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});