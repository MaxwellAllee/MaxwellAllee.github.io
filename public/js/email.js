var $submit = $(".submit")
var movePages = false
function validateEmail(emailMess) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(emailMess);
}
var API = {
  sendEmail: function (mess) {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/email",
      data: JSON.stringify({ message: mess })
    }).then(function (response) {
      movePages = true
      if (response === '500') {
        $('#validate').modal($("#valMessage").text("There was an error please try again"));
      }
      else {

        $('#validate').modal($("#valMessage").text("Message successfully sent!"))

      }
    })
  }
}

$("#submit").on("click", emailCheck)
function handleEmail() {
  let message = `This message is from ${$("#name").val().trim()} at ${$("#email").val().trim()}`
  message += `<br> The message is: ${$("#body").val().trim()} `
  API.sendEmail(message)
}
function emailCheck() {
  if ($("#name").val().trim().length <= 1) {
    $('#validate').modal($("#valMessage").text("Please add a Name"));
    return
  }
  if (!validateEmail($("#email").val())) {
    $('#validate').modal($("#valMessage").text("Please specify a valid email address!"));
    return
  }
  if ($("#body").val().trim().length <= 3) {
    $('#validate').modal($("#valMessage").text("Please add a Message"));
    return
  }
  handleEmail()
}