let autoSlideIndex1 = 0;
let autoSlideCancel = 0;
//const timer = ms => new Promise(res => setTimeout(res, ms))
autoSlides()

function currentDiv(n, s) { //n = slide #, s = slideshow #
  showDivs(slideIndex = n, s);
}

function showDivs(n, s) {
  let i;
  let x = document.getElementsByClassName("slideshow-image"+s);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  if (autoSlideCancel < 1) {autoSlideCancel++}
}

function autoSlides() {
  setTimeout(autoSlides, 5000)
  if (autoSlideCancel > 0) {autoSlideCancel--}
if (autoSlideCancel == 0) {
  let slides = document.getElementsByClassName("autoSlides");
  let s = parseInt(slides[0].id.match(/\d+/g));
  let x = document.getElementsByClassName("slideshow-image"+s);
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  autoSlideIndex1++;
  if (autoSlideIndex1 > x.length) {autoSlideIndex1 = 1}
  x[autoSlideIndex1-1].style.display = "block";
  //console.log(autoSlideIndex1);
}
}
