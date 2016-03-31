var express = require('express'),
  router = express.Router(),
  Goal = require('../models/goal')

// ROUTES FOR THE GOALS
// =============================================================================
// POST a new goal
// (accessed at POST http://localhost:8080/goals)
router.post('/', function(req, res) {
  var description = req.body.description
  Goal.create(description, function(err, goal) {
    if (err) {res.send(err)}
    res.redirect('/')
  })
})

// POST a new failure for a goal
// (accessed at POST http://localhost:8080/goals/goal_id/failure)
router.post('/:id/failure', function(req, res) {
  var goal_id = req.params.id
  Goal.addFailure(goal_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

// POST a new success for a goal
// (accessed at POST http://localhost:8080/goals/goal_id/success)
router.post('/:id/success', function(req, res) {
  var goal_id = req.params.id
  Goal.addSuccess(goal_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

// DELETE a goal
// (accessed at DELETE http://localhost:8080/goals/goal_id)
router.delete('/:id', function(req, res) {
  var goal_id = req.params.id
  Goal.delete(goal_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

module.exports = router
