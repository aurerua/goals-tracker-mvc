// domReady - Credit: beeker.io
var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};
domReady(function() {
  var deleteButtons = u('.delete');
  deleteButtons.each(function(currentValue) {
    var id = currentValue.closest('li').id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id, {
        method: 'delete'
      }).then(function(responseObj) {
        window.location.reload();
      });
    });
  });

  var addSuccessButtons = u('.success');
  addSuccessButtons.each(function(currentValue) {
    var id = currentValue.closest('li').id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id + '/success', {
        method: 'post'
      }).then(function(responseObj) {
        window.location.reload();
      });
    });
  });

  var addFailureButtons = u('.failure');
  addFailureButtons.each(function(currentValue) {
    var id = currentValue.closest('li').id;
    currentValue.addEventListener('click', function() {
      fetch('goals/' + id + '/failure', {
        method: 'post'
      }).then(function(responseObj) {
        window.location.reload();
      });
    });
  });
});
