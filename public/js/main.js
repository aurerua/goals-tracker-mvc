// domReady - Credit: beeker.io
var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
  
  // DELETE a goal
  var deleteButtons = u('.delete');
  deleteButtons.each(function(currentValue) {
    var li = currentValue.closest('li');
    var id = li.id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id, {
        method: 'delete'
      }).then(function(responseObj) {
        li.remove();
      });
    });
  });

  // ADD a success
  var addSuccessButtons = u('.success');
  addSuccessButtons.each(function(currentValue) {
    var id = currentValue.closest('li').id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id + '/success', {
        method: 'post'
      }).then(function(responseObj) {
        var numberOfSuccesses = u(currentValue.closest('li')).find('.successes');
        numberOfSuccesses.text(parseInt(numberOfSuccesses.text(), 10) + 1);
      });
    });
  });

  // ADD a failure
  var addFailureButtons = u('.failure');
  addFailureButtons.each(function(currentValue) {
    var id = currentValue.closest('li').id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id + '/failure', {
        method: 'post'
      }).then(function(responseObj) {
        var numberOfFailures = u(currentValue.closest('li')).find('.failures');
        numberOfFailures.text(parseInt(numberOfFailures.text(), 10) + 1);
      });
    });
  });
});
