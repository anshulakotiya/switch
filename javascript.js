function changeImage(num) {
  var image = document.getElementById(num);
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}
