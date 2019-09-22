var score = 0;

onEvent("startButton", "click", function() {
  score = 0;
  setText("scoreData", 0);
  setScreen("gameScreen");
});

onEvent("doggSnoop", "click", function() {
  setPosition("doggSnoop", randomNumber(50,280), randomNumber(50,350));
  score = score + 1;
  setText("scoreData", score);
  if(score == 10) {
    setScreen("winScreen");
  }
});

onEvent("background", "click", function() {
  score = score - 1;
  setText("scoreData", score);
  if(score == -3) {
    setScreen("loseScreen");
  }
});

onEvent("winMenu", "click", function() {
    setScreen("startScreen");
});
  
onEvent("loseMenu", "click", function() {
    setScreen("startScreen");
});