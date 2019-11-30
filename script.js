function myFunction() {
    var x = document.getElementsByClassName("p");
    x[0].innerHTML = "Текст изменился.";
  }
function Function2() {
    var x = document.getElementsByClassName("warning");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }
}
function Function1() {
    var x = document.getElementsByClassName(".warning");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
}