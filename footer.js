document.addEventListener('DOMContentLoaded', function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Specify the path to your footer.html file
    xhr.open('GET', 'footer.html', true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Inject the footer HTML into the placeholder element
        document.getElementById('footer-container').innerHTML = xhr.responseText;
      }
    };
  
    // Send the request to retrieve the footer HTML
    xhr.send();
  });