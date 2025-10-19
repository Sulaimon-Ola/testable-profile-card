const timeElement = document.querySelector('[data-testid="test-user-time"]');
timeElement.textContent = Date.now();

// update every second
setInterval(() => {
  timeElement.textContent = Date.now();
}, 1000);
