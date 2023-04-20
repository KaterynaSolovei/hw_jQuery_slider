const $slides = $('.slide');
const $pauseBtn = $('#pause-btn');
const $prevBtn = $('#prev-btn');
const $nextBtn = $('#next-btn');
const $listItem = $('.list_item');

let currentSlide = 0;
let timerID = null;
let isPlaying = true;
let currentListItem = 0;

function gotoSlide(n) {
  $slides.eq(currentSlide).toggleClass('active');
  $listItem.eq(currentSlide).toggleClass('active');
  currentSlide = (n + $slides.length) % $slides.length;
  $slides.eq(currentSlide).toggleClass('active');
  $listItem.eq(currentSlide).toggleClass('active');
}

function prevSlide() {
  gotoSlide(currentSlide - 1);
}

function nextSlide() {
  gotoSlide(currentSlide + 1);
}

function prevHandler() {
  pauseHandler();
  prevSlide();
}

function nextHandler() {
  pauseHandler();
  nextSlide();
}

function pauseHandler() {
  if (isPlaying) {
    clearInterval(timerID);
    isPlaying = false;
    $pauseBtn.html('');
  }
}

function playHandler() {
  timerID = setInterval(nextSlide, 2000);
  isPlaying = true;
  $pauseBtn.html('');
}

function pausePlayHandler() {
  if (isPlaying) {
    pauseHandler();
  } else {
    playHandler();
  }
}

$pauseBtn.on('click', pausePlayHandler);
$prevBtn.on('click', prevHandler);
$nextBtn.on('click', nextHandler);

timerID = setInterval(nextSlide, 2000);