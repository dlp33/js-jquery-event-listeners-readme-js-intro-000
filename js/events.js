//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey');
  });
}


function frameIt() {
  $('img').on('load', => {
    $('img').addClass('.tasty');
  })

}



$(document).ready(function(){

getIt();
frameIt();




});
