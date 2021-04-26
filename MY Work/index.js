for (var i = 0; i<= 3; i++){
  document.querySelectorAll(".feaNav")[i].addEventListener("click", function(){
    document.querySelector(".feaData").innerHTML = "Preview our Data!";
  });
}
