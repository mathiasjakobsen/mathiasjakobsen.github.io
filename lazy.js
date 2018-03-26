window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('article').forEach(function(article) {
    article.style.backgroundImage = 'url("' + article.dataset.thumbnail + '")'
    article.classList.add('blurred')
    var img = new Image()
    img.src = article.dataset.image
    img.onload = function() {
      article.classList.remove('blurred')
      article.style.backgroundImage = 'url("' + article.dataset.image + '")';
    }
  })
})
