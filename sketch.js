var bgImage
function preload(){
bgImage = loadImage("bg image.jpg")
}

function setup(){
createCanvas(1600, 800)
Answer = createInput("Type the answer")
answer = createInput("Type the answer")
}


  function draw(){
    background(bgImage)
    textSize(25)
    fill("red")
    text("In which country do we feel winter during May-July?", 500, 200)
    Answer.position(500, 250)
    text("How many times have Austrailia won the world cup?", 500, 500)
    answer.position(500, 600)
text("Who was the first president of India?", 500, 800)
    answer.position(500, 850)

  }
