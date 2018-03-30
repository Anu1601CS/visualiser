$(document).ready(function(){

    $("#signup_submit").click(function(){

        var name=$("#signup-name").val();
        var email=$("#signup-email").val();
        var username=$("#signup-username").val();
        var password=$("#signup-password").val();
        var submit = 'submit';

      $.post("includes/signup.inc.php",
       {
         submit:submit,
         username:username,
         password:password,
         name:name,
         email:email
       },

      function(data,status){

            if(status=="success")
            {
                alert(data);
            }

          });
    });
});

$(document).ready(function(){

    $("#login_submit").click(function(){

        var email=$("#signin-email").val();
        var password=$("#signin-password").val()
        var submit = 'submit';

      $.post("includes/login.inc.php",
       {
         submit:submit,
         password:password,
         email:email
       },

      function(data,status){

            if(status=="success")
            {
                window.location = "http://localhost/project/vis/OnlinePythonTutor-master/v5-unity/";
            }

          });
    });
});


$(document).ready(function(){

    $("#reset_submit").click(function(){

        var email=$("#reset-email").val();
        var submit = 'submit';

      $.post("includes/forgot.inc.php",
       {
         submit:submit,
         email:email
       },

      function(data,status){

            if(status=="success")
            {
                alert(data);
            }

          });
    });
});

$(document).ready(function(){

    $("#logout_btn").click(function(){

        var submit = 'submit';

      $.post("includes/logout.inc.php",
       {
         submit:submit,
       },

      function(data,status){

            if(status=="success")
            {
                window.location = "http://localhost/project/vis/OnlinePythonTutor-master/v5-unity/";
            }

          });
    });
});


$(document).ready(function(){

  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;



      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
 });
