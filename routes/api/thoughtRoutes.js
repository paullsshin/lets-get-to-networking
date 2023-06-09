const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts);

router.route('/:userId').post(createThought);

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router.route('/:userId/:thoughtId').post(addReaction);

  router.route('/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;

