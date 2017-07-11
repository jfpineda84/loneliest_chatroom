$(window).load(function(){

  var message =  function() {
    // refacto the repeating code inside this fuction, so all i have to do i call it later as message() and i can use the code below to run the commands

      // var time = ((new Date()).getHours()) + ':' + ((new Date()).getMinutes())
      // here i find current time and get hours and minutes to display

      // var users = ['Me','Myself','I']
      // array where all possible users are locater in an array form
      // var randomNumber = Math.floor((Math.random() * 3)+0);
      // this will randomly select a # betwee 3 and 1 (although it is not working- check)


      var i = 0;
      count = function() {
        var users = ['Me','Myself','I'];
          console.log(i)
        return users[ i++ %3 ];
      }


      var newMessage = $('#new-message-body').val();
      // console.log(oldMessage); testing to call message writen in newWindow

      var messageConversation = '<li class="message"> <a class="delete" href="#">Delete</a><h3 class="author">' + count() + '</h3>' + "<p class='message-body'>" + newMessage + "</p>" + '<span class="timestamp">' + time + '</span></li>';
      // conversation message to be placed
      // newMessage is added, to replace "message body"(message shown in window)
      // time is added to displaty the time the message is sent

      $('#conversation').append(messageConversation);
      // appends message convo to conversation window

      $('#new-message-body').val('');
      // after message is sent, it errases the message in the initial window


  };


  $('#new-message-button').on('click',function(){
    // when press button 'send'
    message();
    // pass the function call above
  });
  // pulled it out the click function after refactoring, to DRY my code

  $('#new-message-body').keypress(function(event){
    if (event.which == 13){
      // 13 is the Javascript key code, so... if 'press enter' it will check if key == 13
      message();
      // pass the function from call above
    }
  });

  $('#conversation').on('click', '.delete' , function(eventWindow){
    // in conversation window, when click the X 'delete' act on
    eventWindow.preventDefault()
    // when x was clicked, the window would move up, preventDefault prevents this from happening

    $(this).closest('.message').remove();
    // the message class (return 1 level, parent level back to message) and remove that class
  });


});
