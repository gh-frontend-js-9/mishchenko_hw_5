$('.navigation-block__burger').click(function(){
  $('.navigation-block__burger').toggleClass('clicked');
  $('nav').toggleClass('show');
  $('section').toggleClass('blur');
});