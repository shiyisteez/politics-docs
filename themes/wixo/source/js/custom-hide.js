document.addEventListener('DOMContentLoaded', function() {
  // Select all post list items
  var postListItems = document.querySelectorAll('li.post-list-item');

  postListItems.forEach(function(item) {
    // Get the title text from each item
    var title = item.textContent.trim();

    // If the title is empty, hide the list item
    if (title === "") {
      item.style.display = 'none';
    }
  });
});
