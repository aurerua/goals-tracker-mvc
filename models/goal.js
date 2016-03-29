var db = require('./db'),
 getSlug = require('speakingurl')

// Insert a new goal in the database and return its id.
exports.create = function(description, callback) {
 var goal = {
  description: description,
  slug: getSlug(description),
  successes: [],
  failures: []
 }
 db.insert(goal, callback)
}

// Get all goals.
exports.all = function(cb) {
 db.find({}).sort({
  updatedAt: -1
 }).exec(cb)
}

// Add a failure to the goal with this slug.
exports.addFailure = function(goal_id, cb) {
 db.update({
  _id: goal_id
 }, {
  $push: {
   failures: new Date()
  }
 }, cb)
}

// Add a success to the goal with this slug.
exports.addSuccess = function(goal_id, cb) {
 db.update({
  _id: goal_id
 }, {
  $push: {
   successes: new Date()
  }
 }, cb)
}

// Delete the goal with this slug.
exports.delete = function(goal_id, cb) {
 db.remove({
  _id: goal_id
 }, {}, cb)
}