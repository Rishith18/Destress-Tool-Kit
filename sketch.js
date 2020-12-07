var apple, list, music, plate, running, sleep, smile, tea, weight;
var start, papple, plist, pmusic, pplate, prunning, psleep, psmile, ptea, pweight;
var gameState = start;

function preload() {
  apple_image = loadImage("apple.jpg");
  list_image = loadImage("list.jpg");
  music_image = loadImage("music.jpg");
  plate_image = loadImage("plate.jpg");
  running_image = loadImage("running.jpg");
  sleep_image = loadImage("sleep.jpg");
  smile_image = loadImage("smile.jpg");
  weight_image = loadImage("weight.jpg");
}

function setup() {
  createCanvas(800,800);
  apple = createSprite(800/3 - 140, 800/3 - 140, 100, 100);
  apple.addImage("apple",apple_image);
  apple.scale = 0.7;

  list = createSprite((800/3) * 2 - 140, 800/3 - 140, 100, 100);
  list.addImage("list",list_image);
  list.scale = 0.7;

  music = createSprite((800/3) * 3 - 140, 800/3 - 140, 100, 100);
  music.addImage("music",music_image);
  music.scale = 0.7;

  plate = createSprite(800/3 - 140, (800/3) * 2 - 140, 100, 100);
  plate.addImage("plate",plate_image);
  plate.scale = 0.7;

  running = createSprite(800/3 - 140, (800/3) * 3 - 140, 100, 100);
  running.addImage("running",running_image);
  running.scale = 0.7;

  smile = createSprite((800/3) * 2 - 140, (800/3) * 3 - 140, 100, 100);
  smile.addImage("smile",smile_image);
  smile.scale = 0.7;

  sleep = createSprite((800/3) * 3 - 140, (800/3) * 2 - 140, 100, 100);
  sleep.addImage("sleep",sleep_image);
  sleep.scale = 0.7;

  weight = createSprite((800/3) * 3 - 140, (800/3) * 3 - 140, 100, 100);
  weight.addImage("weight",weight_image);
  weight.scale = 0.7;
}

function draw() {
  background(255);

  textSize(15);
  fill("black");
  stroke("black");
  text("This one is simple,",80,100);
  text("just eat an apple,",85,115);
  text("as they say, an apple a",65,130);
  text("day keeps the",90,145);
  text("doctor away",95,160);

  text("When you are feeling",330,100);
  text("emotional, write a",340,115);
  text("list of all the feelings",333,130);
  text("you are currently",343,145);
  text("having at the time",340,160);

  text("If you are one of those",588,100);
  text("people who like music,",587,115);
  text("this will be good for",597,130);
  text("you, listen to your",600,145);
  text("favorite song for as",596,160);
  text("long as you like",605,175);

  text("If eating food makes",60,360);
  text("you less stressed, than",50,375);
  text("choose a food of your",55,390);
  text("liking, and simply",68,405);
  text("eat it",108,420);

  text("This is something",607,360);
  text("everyone wants to do,",593,375);
  text("if you have time, take",595,390);
  text("a quick power nap for",593,405);
  text("as long as you like",604,420);

  text("Take a quick jog or run",47,635);
  text("around your neighborhood",35,650);
  text("or anywhere you want,",49,665);
  text("you may go as fast or",51,680);
  text("as slow as you like",59,695);

  text("Occupy yourself by",331,635);
  text("searching up 'Try not",326.5,650);
  text("to Laugh' on YouTube",325,665);
  text("and watch it for as long",321,680);
  text("as you like and try",338,695);
  text("not to laugh",355,710);

  text("Take a quick workout",590,635);
  text("using dumbbells or",598,650);
  text("anything you want, it",592,665);
  text("can be any type",606,680);
  text("of workout",626,695);

  drawSprites();

  textSize(25);
  text("CLICK AN ICON",300,370);
  text("TO REVEAL THE",296,400);
  text("DESTRESS EXCERCISE",250,430);

  mousepressed();
}

function mousepressed() {
  if (mousePressedOver(apple)) {
    apple.visible = false;
    list.visible = true;
    music.visible = true;
    plate.visible = true;
    running.visible = true;
    sleep.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(list)) {
    list.visible = false;
    apple.visible = true;
    music.visible = true;
    plate.visible = true;
    running.visible = true;
    sleep.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(music)) {
    music.visible = false;
    list.visible = true;
    apple.visible = true;
    plate.visible = true;
    running.visible = true;
    sleep.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(plate)) {
    plate.visible = false;
    list.visible = true;
    music.visible = true;
    apple.visible = true;
    running.visible = true;
    sleep.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(sleep)) {
    sleep.visible = false;
    list.visible = true;
    music.visible = true;
    plate.visible = true;
    running.visible = true;
    apple.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(running)) {
    running.visible = false;
    list.visible = true;
    music.visible = true;
    plate.visible = true;
    apple.visible = true;
    sleep.visible = true;
    smile.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(smile)) {
    smile.visible = false;
    list.visible = true;
    music.visible = true;
    plate.visible = true;
    running.visible = true;
    sleep.visible = true;
    apple.visible = true;
    weight.visible = true;
  }
  if (mousePressedOver(weight)) {
    weight.visible = false;
    list.visible = true;
    music.visible = true;
    plate.visible = true;
    running.visible = true;
    sleep.visible = true;
    smile.visible = true;
    apple.visible = true;
  }
}