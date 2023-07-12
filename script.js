const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    // window.onclick = function(event) {
    //   if (event.target == hamburger) {
    //     hamburger.style.display = "none";
    //   }
    // }

// // Modal

// // create references to the modal...
// var modal = document.getElementById('myModal');
// // to all images -- note I'm using a class!
// var images = document.getElementsByClassName('myImages');
// // the image in the modal
// var modalImg = document.getElementById("img01");


// // Go through all of the images with our custom class
// for (var i = 0; i < images.length; i++) {
//   var img = images[i];
//   // attach click listener for this image
//   img.onclick = function(evt) {
//     console.log(evt);
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     }
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }