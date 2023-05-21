// Fetch photos from the Unsplash API based on the search term
function fetchPhotos(searchTerm) {
  var endpoint = 'https://api.unsplash.com/search/photos';
  var clientId = 'YOUR_UNSPLASH_CLIENT_ID'; // Replace with your Unsplash client ID
  var url = `${endpoint}?query=${searchTerm}&client_id=${clientId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayPhotos(data.results);
    })
    .catch(error => {
      console.log('Error fetching photos:', error);
    });
}

// Display the fetched photos on the website
function displayPhotos(photos) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  photos.forEach(photo => {
    var resultDiv = document.createElement('div');
    resultDiv.className = 'result';

    var img = document.createElement('img');
    img.src = photo.urls.regular;
    img.alt = photo.alt_description;

    resultDiv.appendChild(img);
    resultsDiv.appendChild(resultDiv);
  });
}

// Get the user's search term and initiate the photo search
function searchPhotos() {
  var searchTerm = document.getElementById('search-input').value.trim();
  if (searchTerm !== '') {
    fetchPhotos(searchTerm);
  }
}

// Attach the searchPhotos function to the search button's click event
var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchPhotos);
