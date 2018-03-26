window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('article').forEach(function(article) {
    var img = new Image()
    img.src = article.dataset.image
    img.onload = function() {
      article.classList.remove('lazy')
      article.style.backgroundImage = 'url("' + article.dataset.image + '")';
    }
  })
})
