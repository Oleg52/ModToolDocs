document.addEventListener('DOMContentLoaded', function () {
  mediumZoom('article img:not(a img)', {
    margin: 24,
    background: '#000',
    scrollOffset: 0
  });
});