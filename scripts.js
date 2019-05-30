var app = firebase.initializeApp({
  apiKey: "AIzaSyA1_ewf9p5-PZNMn55CQUuIwovCM_tsY5s",
  authDomain: "stubborn-data.firebaseapp.com",
  databaseURL: "https://stubborn-data.firebaseio.com",
  projectId: "stubborn-data",
  storageBucket: "",
  messagingSenderId: "232109038884",
  appId: "1:232109038884:web:f6a4f5c8ecf89eab"
});

// Get all link "<a>" tags
const linkTags = document.querySelectorAll('a');

for (let i = 0; i < linkTags.length; i++) {
  linkTags[i].addEventListener('click', function(e) {
    e.preventDefault();

    app.database().ref('command').set({
      time: new Date().getTime(),
      text: e.target.innerText
    })
      .then(() => {
        window.location.href = e.target.href;
      })
  });
}
