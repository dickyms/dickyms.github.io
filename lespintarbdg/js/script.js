document.addEventListener("DOMContentLoaded", function() {
    fetch('html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('snippet-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching the HTML snippet:', error));
});