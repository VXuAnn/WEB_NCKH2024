const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/setting.controller");

router.get("/", controller.index);

router.get("/salarySetting", controller.salarySetting);

module.exports = router;