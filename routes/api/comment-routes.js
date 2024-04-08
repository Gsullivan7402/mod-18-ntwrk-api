const router = require('express').Router();

const {
  getAllComment, 
  getCommentById, 
  createComment, 
  updateComment, 
  deleteComment, 
  createReaction, 
  deleteReaction 
} = require('../../controllers/comment-controller');
// Set up GET all and POST at /api/comments
router
  .route('/')
  .get(getAllComment) 
  .post(createComment); 

// Set up GET one, PUT, and DELETE at /api/comments/:id
router
  .route('/:id')
  .get(getCommentById) 
  .put(updateComment) 
  .delete(deleteComment); 

// Post at /api/comments/:commentId/reactions
router
  .route('/:commentId/reactions')
  .post(createReaction);

// Delete at /api/comments/:commentId/reactions/:reactionId
router
  .route('/:commentId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
