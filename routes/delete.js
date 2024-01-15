const express = require("express");
const router = express.Router();
const {
  deletePost,
  deleteDiary,
  deletePostComment,
  deleteStoryComment,
  deleteDiaryComment,
  unReactStory,
  unReactDiary,
} = require("../controllers/delete");

//post
router.delete("/post/:postId", deletePost);
router.delete("/post-comment/:commentId", deletePostComment);

//diary
router.delete("/diary/:diaryId", deleteDiary);
router.delete("/diary-comment/:commentId", deleteDiaryComment);
router.delete("/diary-react/:diaryId", unReactDiary);

//story
router.delete("/story-react/:storyId", unReactStory);

router.delete("/story-comment/:commentId", deleteStoryComment);
//router.delete("story/:storyId");

module.exports = router;
