function validateForm() {
  var un = document.querySelector('#email').value;
  var pw = document.querySelector('#password').value;
  var username = "username";
  var password = "password";
  if ((un == username) && (pw == password)) {
    alert('You are successfully logged in');
  } else {
    alert("Login was unsuccessful, please check your username and password");
    return false;
  }
}
<section class="loginform">
  <form id="contactForm" action="#" onSubmit="return validateForm()" method="post">
    <i class="fas fa-user-alt" style="font-size: 70px; color: #96031A;"></i>
    <h2><strong>Login</strong></h2>
    <p>Login to your Vogue Account to access exclusive features. </p>


    <input id="email" name="user" class="txt" placeholder="Email*" type="text" required>

    <input id="password" name="pword" class="txt" placeholder="Password*" type="password" required>
    <aside>
      <label><input type="checkbox" />Remember Me</label>
      <aside>
        <input type="submit" value="Log In" class="login-btn">
        <br>
        <a href="#" class="forget">Forgot Password?</a>
        <br>
        <input formaction="signup.html" type="submit" value="Sign Up" class="signup-btn">
  </form>
</section>
