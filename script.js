const list = ["./resources/heads.svg", "./resources/tails.svg"];

$("button").on("click", function () {
  let randomNumber = Math.floor(Math.random() * list.length);
  let random = list[randomNumber];
  $(".pic").html(`<img src="${random}" alt="Coin side">`);
  if (randomNumber==1){
    $(".result").text("Tails")
  }
  else{
    $(".result").text("Heads")
  }
});
