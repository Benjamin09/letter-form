$(document).ready(function(){
 var age = parseInt(prompt("How old are you?"));
 if (age > 18) {
   $('#message').show();
 } else if (age === 18) {
   alert('cool bro, you can vote')
 } else {
   $('#under-18').show() }
});
