// Origional code found here https://code.sololearn.com/WMLm7mRuVroc/
    function numberpicker1() {
      var char;
      var numbercharset;
      // The lenngth/strength of the password
      var numlength = 3;
      // The characters that are in the password
      var charset = "1234567890";
      // Where the password is generated
      var randomnumber = "";
      for (i = 0; i < numlength; i++) {
        numbercharset = charset.charAt(char);
        // Generates a random password each time the "Generate Password" button is clicked
        char = Math.floor(Math.random() * charset.length);
        // Generates a random password using the charset
        randomnumber = randomnumber + numbercharset;
        }
      // The output id for the input box "passwordinput"
      number1.value = randomnumber;
    }

    function numberpicker2() {
      var char;
      var numbercharset;
      // The lenngth/strength of the password
      var numlength = 3;
      // The characters that are in the password
      var charset = "1234567890";
      // Where the password is generated
      var randomnumber = "";
      for (i = 0; i < numlength; i++) {
        numbercharset = charset.charAt(char);
        // Generates a random password each time the "Generate Password" button is clicked
        char = Math.floor(Math.random() * charset.length);
        // Generates a random password using the charset
        randomnumber = randomnumber + numbercharset;
        }
      // The output id for the input box "passwordinput"
      number2.value = randomnumber;
    }

    function check(form)
	{
		if(form.userid.value == form.pswrd.value)
		{
      alert("You are ready to start the actual test")
      setTimeout(function(){
        window.location.href = 'https://www.tutorialspoint.com/javascript/';
     }, 500);
}
		}