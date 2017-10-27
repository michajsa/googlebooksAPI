var button = document.getElementById('button');
var input = document.getElementById('input');
var results = document.getElementById('results');

button.addEventListener('click', function() {
  if(input.value === '') {
    alert('There is no value');
  }else {
    console.log('This function works');
    console.log(input.value);
    $.ajax({
      // will bring the books to the page
      url: "https://www.googleapis.com/books/v1/volumes?q=" +  input.value,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        for(var i = 0; i < data.items.length; i++) {
          // these will pull the image for book info and authors
          results.innerHTML += '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '">';
          results.innerHTML += '<h1>' + data.items[i].volumeInfo.title + '</h2>';
          results.innerHTML += '<h3>' + data.items[i].volumeInfo.authors + '</h3>';
          results.innerHTML += '<p>' + data.items[i].volumeInfo.description + '</p>';
          results.innerHTML += '<p>' + data.items[i].volumeInfo.publishedDate + '</p>';
        }
      },
      type: 'GET'
    });
    input.value = '';
  }
})
