(function () {

const buttons = document.querySelectorAll("button");

  buttons[0].addEventListener('click', function(event) {
        event.target.classList.toggle('button-danger')
  });
    
    
    buttons[1].addEventListener('click',function(event) {
        event.target.innerText = 'You have clicked me';
})

    
    buttons[2].addEventListener('click',function() {
      buttons[1].innerText = 'button 2';
})
  // your js goes here

})()