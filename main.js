var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "redcar.png";
var car1_x = 10;
var car1_y = 10;
var car1_imgTag = "";

var car2_width = 120;
var car2_height = 70;
var car2_image = "bluecar.png";
var car2_x = 10;
var car2_y = 100;
car2_imgTag = "";

var background_image = "racing.jpeg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, 0, 0, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, 0, 0, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
 keyPressed = e.keyCode;
 console.log("A key has been pressed");
  if(keyPressed == '38') {
      car1_up()
      console.log("Up Arrow Key")
  }
  if(keyPressed == '37') {
    car1_left()
    console.log("Left Arrow Key")
  }
    if(keyPressed == '40') {
        car1_down()
        console.log("Down Arrow Key")
    }
    if(keyPressed == '39') {
        car1_right()
        console.log("Right Arrow Key")
    }
    if(keyPressed == '87') {
        car2_up()
        console.log("W Key")
    }
    if(keyPressed == '65') {
        car2_left()
        console.log("A Key")
    }
    if(keyPressed == '83') {
        car2_down()
        console.log("S Key")
    }
    if(keyPressed == '68') {
        car2_right()
        console.log("D Key")
    }
}

function car1_up() {

    if (car1_y >= 0){
        car1_y -= 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car1_down() {

    if (car1_y <= 700){
        car1_y += 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car1_left() {

    if (car1_x >= 0){
        car1_x -= 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car1_right() {

    if (car1_x <= 700){
        car1_x += 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car2_up() {

    if (car2_y >= 0){
        car2_y -= 10;
        console.log("When W is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car2_down() {

    if (car2_y <= 700){
        car2_y += 10;
        console.log("When S is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car2_left() {

    if (car2_x >= 0){
        car2_x -= 10;
        console.log("When A is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

function car2_right() {

    if (car2_x <= 700){
        car2_x += 10;
        console.log("When D is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadcar1();
        uploadcar2();
        uploadBackground();
    } 

}

if (car1_x > 700) {

    console.log("Car 1 Won!");
     document.getElementById("game_status").innerHTML = "Car 1 Won!"

}

if (car2_x > 700) {

    console.log("Car 2 Won!");
     document.getElementById("game_status").innerHTML = "Car 2 Won!"

}
