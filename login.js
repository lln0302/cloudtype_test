// Firebase 설정 정보를 넣어주세요.
const firebaseConfig = {
    apiKey: "AIzaSyD23BNt_CZ43ZasIVS3P_vMRFs6cW6TEr0",
    authDomain: "fire-test-mozilla.firebaseapp.com",
    databaseURL: "https://fire-test-mozilla-default-rtdb.firebaseio.com",
    projectId: "fire-test-mozilla",
    storageBucket: "fire-test-mozilla.appspot.com",
    messagingSenderId: "169534096470",
    appId: "1:169534096470:web:5bcd6ebfd76a311ee6e7f7",
    measurementId: "G-ERQ3SDV3ZK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  // 로그인 함수
  function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("에러 : " + errorMessage);
    });
  }
  