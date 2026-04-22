const express = require("express");
const router = express.Router();

const { getDatasetReports, updateDatasetReport, getArchivedDatasetReports } = require("../controllers/datasetReportController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", verifyToken, getDatasetReports);
router.get("/archived", verifyToken, getArchivedDatasetReports);
router.put("/update/:id", verifyToken, updateDatasetReport);

module.exports = router;