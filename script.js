$(document).ready(function () {
  var slideIndex = 0;
  var totalSlides = $('.main-img').length;

  function showSlide(index) {
    $('.maine-slider-1').css('transform', 'translateX(-' + index * 100 + '%)');
    $('.dot').removeClass('active');
    $('.dot').eq(index).addClass('active');
  }

  function autoPlay() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
  }

  $('.dots').on('click', '.dot', function () {
    slideIndex = $(this).index();
    showSlide(slideIndex);
  });

  var autoPlayInterval = setInterval(autoPlay, 3000);

  $('.slider-1').mouseover(function () {
    clearInterval(autoPlayInterval);
  });

  $('.slider-1').mouseout(function () {
    autoPlayInterval = setInterval(autoPlay, 3000);
  });
});




setTimeout(showform, 2000);
function showform() {
  document.getElementById('showform').style.display = "block";
}
function hideform() {
  document.getElementById('showform').style.display = "none";
  document.getElementById('showform').style.position = "fixed";
}