/* Init typed.js */

const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

/* Send Email */

function sendEmail(){
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_gqhgwq5", "template_rvbbi7e", params)
  .then(
    (message) => {
      if(message.status == 200){
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
      }
    }
  );
}