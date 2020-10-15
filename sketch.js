var ball,db;
var pos;
function setup(){
    db = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos = db.ref('Ball/position');
    ballpos.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   db.ref('Ball/position').set({
       'X':pos.X + x, 
       'Y':pos.Y + y
   })
}
function readposition(data){
    pos = data.val();
    ball.x = pos.X;
    ball.y = pos.Y;
}
function showerror(){
console.log("error");
}