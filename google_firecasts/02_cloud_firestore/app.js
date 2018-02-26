
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoDau-ljk_3SU3r-YqLX85Fta25gvPG-c",
    authDomain: "firestore-demos-3b58c.firebaseapp.com",
    databaseURL: "https://firestore-demos-3b58c.firebaseio.com",
    projectId: "firestore-demos-3b58c",
    storageBucket: "firestore-demos-3b58c.appspot.com",
    messagingSenderId: "685476096093"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#hotDogOutput");
  const inputTextField = document.querySelector("#latestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");

  saveButton.addEventListener("click", function(){
    const textToSave = inputTextField.value;
    console.log("I am going to save "+ textToSave + "to firestore");
    docRef.set({
      hotDogStatus:textToSave
    }).then(function(){
      console.log("Status saved!");
    }).catch(function (error){
      console.log("Got an error: "+ error);
    });
  })
