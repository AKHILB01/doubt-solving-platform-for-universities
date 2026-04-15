const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const { 
  getClassDoubts, 
  uploadDoubt, 
  getDoubtsByBranch, 
  upvoteDoubt, 
  getSingleDoubt,
  getAllDoubtsForTeacher,
  uploadVideo,
  uploadAudio,
  toggleSolvedStatus, 
  markDoubtAsSolved
} = require("../controllers/doubtController");

const ollamaService = require("../utils/ollama");

// Existing multer storage for teacher uploads (responses)
const teacherStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../uploads/responses");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const uploadTeacher = multer({ storage: teacherStorage });

// NEW multer storage for student uploads (doubt images/audio)
const studentStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const uploadStudent = multer({ storage: studentStorage });

// Student-related routes
router.get("/branch/:branch", getDoubtsByBranch);
router.get("/class", getClassDoubts);

// Teacher uploads video/audio responses (use teacher storage)
router.post("/:id/upload-video", uploadTeacher.single("file"), uploadVideo);
router.post("/:id/upload-audio", uploadTeacher.single("file"), uploadAudio);

// Student uploads doubt (text/file audio/image) (use student storage)
router.post("/upload", uploadStudent.single("file"), uploadDoubt);

router.post("/upvote/:id", upvoteDoubt);
router.get("/:id", getSingleDoubt);
router.put("/:id/mark-solved", markDoubtAsSolved);

// Teacher dashboard route
router.get("/teacher/all-doubts", getAllDoubtsForTeacher);
router.patch("/toggleSolved/:id", toggleSolvedStatus);

// AI Test Route
router.post('/test-ai', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required for AI testing' });
    }

    const summary = await ollamaService.summarizeText(text);
    const keyTerms = await ollamaService.extractKeyTerms(text);

    res.json({
      originalText: text,
      summary,
      keyTerms,
      status: 'AI processing successful'
    });
  } catch (error) {
    console.error('AI test failed:', error);
    res.status(500).json({
      error: 'AI processing failed',
      details: error.message
    });
  }
});

module.exports = router;
