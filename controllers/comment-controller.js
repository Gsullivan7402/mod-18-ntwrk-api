const { User, Comment } = require('../models');

const commentController = {

    //get all comments
    getAllComment(req, res) {
        Comment.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //get one comment by id
    getCommentById({ params }, res) {
        Comment.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No comment found with that id!' });
                    return;
                }
                res.json(dbCommentData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //create comment
    createComment({ body }, res) {
        Comment.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { comments: _id } }, // Changed from thoughts to comments
                    { new: true }
                );
            })
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbCommentData);
            })
            .catch(err => res.json(err));
    },

    //update comment
    updateComment({ params, body }, res) {
        Comment.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No comments found with that id!' });
                    return;
                }
                res.json(dbCommentData);
            })
            .catch(err => res.json(err));
    },

    //delete comment
    deleteComment({ params }, res) {
        Comment.findOneAndDelete({ _id: params.id })
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No comment found with that id!' });
                    return;
                }
                return User.findOneAndUpdate(
                    { _id: dbCommentData.userId }, // Assuming each comment stores userId for back-reference
                    { $pull: { comments: params.id } }, // Changed from thoughts to comments
                    { new: true }
                )
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //create reaction
    createReaction({ params, body }, res) {
        Comment.findOneAndUpdate(
            { _id: params.commentId }, // Changed from thoughtId to commentId
            { $push: { reactions: body } },
            { new: true, runValidators: true })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No comments with this ID.' });
                    return;
                }
                res.json(dbCommentData);
            })
            .catch(err => res.status(400).json(err));
    },

    //delete reaction
    deleteReaction({ params }, res) {
        Comment.findOneAndUpdate(
            { _id: params.commentId }, // Changed from thoughtId to commentId
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({ message: 'No comment found with that ID.' });
                    return;
                }
                res.json(dbCommentData);
            })
            .catch(err => res.json(err));
    }
};

module.exports = commentController;
