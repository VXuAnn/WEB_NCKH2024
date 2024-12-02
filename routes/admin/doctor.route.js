const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/doctor.controller");

router.get("/", controller.index);
router.get("/add", controller.add);

router.get("/schedule", controller.schedule);

module.exports = router;