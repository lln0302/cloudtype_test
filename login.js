  // 로그인 상태 확인
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById('user_div').style.display = "block";
      document.getElementById('login_div').style.display = "none";
  
    } else {
      document.getElementById('user_div').style.display = "none";
      document.getElementById('login_div').style.display = "block";
    }
  });
  
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
  
  // 로그아웃 함수
  function logout(){
    firebase.auth().signOut();
  }
  
  // 회원가입 함수
  function signup(){
    var userEmail = document.getElementById("email_field_signup").value;
    var userPass = document.getElementById("password_field_signup").value;
  
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("에러 : " + errorMessage);
    });
  }
  
  