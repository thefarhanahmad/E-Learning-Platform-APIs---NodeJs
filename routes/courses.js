const express = require("express");
const {
  getCourses,
  createCourse,
  getCourseDetails,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");
const isAdmin = require("../middlewares/authUser");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.post("/courses", authMiddleware, isAdmin, createCourse);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseDetails);
router.put("/courses/:id", authMiddleware, isAdmin, updateCourse);
router.delete("/courses/:id", authMiddleware, isAdmin, deleteCourse);

module.exports = router;
