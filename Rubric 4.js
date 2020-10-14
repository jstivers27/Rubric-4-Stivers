function myFunction() {
  var movie = prompt("What is your favorite scary movie?");
  if (movie != null) {
    document.getElementById("title").innerHTML =
    "<span style='color: orangered;'>Wow " + movie + " is a scary one!";
  }
}


