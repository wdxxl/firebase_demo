
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
  const loadButton = document.querySelector("#loadButton");

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
  });

  loadButton.addEventListener("click", function(){
    docRef.get().then(function (doc){
      if(doc && doc.exists){
        const myData = doc.data();
        outputHeader.innerText = "Hot dog status: "+ myData.hotDogStatus;
      }
    }).catch(function (error){
      console.log("Got an error: "+ error);
    });
  });

    getRealtimeUpdates = function(){
      // docRef.onSnapshot({includeMetadataChanges:true}, function (doc){
      docRef.onSnapshot(function (doc){
        if(doc && doc.exists){
          const myData = doc.data();
          console.log("Check out this document I received", doc);
          outputHeader.innerText = "Hot dog RealTime status: "+ myData.hotDogStatus;
        }
      });
    }
    getRealtimeUpdates();
