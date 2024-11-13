document.getElementById('box').addEventListener('click', function() {

    var files = ['Meh.html', 'meow.html'];

    var randomIndex = Math.floor(Math.random() * files.length);

    window.location.href = files[randomIndex];
});
