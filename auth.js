const provider = new firebase.auth.GoogleAuthProvider();

function loginWithGoogle() {
  firebase.auth().signInWithPopup(provider);
}

function logout() {
  firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(user => {
  const login = document.getElementById("login-section");
  const main = document.getElementById("main-section");
  const nav = document.getElementById("nav-links");

  if (user) {
    if (login) login.style.display = "none";
    if (main) main.style.display = "block";
    if (nav) nav.style.display = "block";
  } else {
    if (login) login.style.display = "block";
    if (main) main.style.display = "none";
    if (nav) nav.style.display = "none";
  }
});
