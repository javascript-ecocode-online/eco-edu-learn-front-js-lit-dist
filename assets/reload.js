document.addEventListener('keydown', function (event) {
  if (event.key === 'r' && event.ctrlKey) {
    location.reload(); // Nhấn Ctrl + R để reload
  }
});
