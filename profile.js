firebase.auth().onAuthStateChanged(user => {
  if (!user) location.href = "index.html";
  document.getElementById("name").innerText = user.displayName;
  document.getElementById("email").innerText = user.email;
});
