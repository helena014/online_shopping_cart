localStorage.removeItem('cart'); // Always start with an empty cart

const checkinBtn = document.getElementById('checkin-btn');
const usernameInput = document.getElementById('username');

checkinBtn.onclick = function() {
  const username = usernameInput.value.trim();
  if (username) {
    localStorage.setItem('username', username); // <---- ***ADD THIS LINE***
    window.location.href = "home.html";
  } else {
    alert('Please enter your name!');
    usernameInput.focus();
  }
};

usernameInput.addEventListener("keydown", function(event) {
  if(event.key === "Enter") checkinBtn.click();
});
