//grafix vars

var tabShow1;
var tabShow2;
var tabShow3;

var tabSec1 = false;
var tabSec2 = false;
var tabSec3 = false;

var one;
var two;
var three;
///////////////////////////////
//math vars
var cols = 13;
var rows = 3000;
var data = [];
var dataTwo = [];

function setup() {
  createCanvas(1280, 720);
    create2Darray(rows);
    pushData(cols);
    createFreq();
  	data[12].sort();
  
}

function draw() {
   background(180);
  tab1();
  tab2();
  tab3();
  title();
  display();
  
}


///////////////MATH////////////////
///////////////////////////////////
function create2Darray(rows){
  for(i = 0; i < cols; i++){
    data[0] = [];
      for(j = 0; j < rows; j++){
          data[0][j] = 0;
}}}
  
  
function pushData(cols){
  for(i = 1; i < cols; i++){
data.push([])
    for(j = 0; j < rows; j++){
      data[i].push(data[i-1][j] + (Math.round(Math.random(0,2))))}}
}

function createFreq(){
for(i = 0; i < cols; i++){
  dataTwo[i]=[];
for(k = 0; k  < cols; k++){
  dataTwo[i][k]= 0;
for(j = 0; j < rows; j++){
      if (data[i][j] === k){
        dataTwo[i][k]++;
}}}}}
///////////////////////////////////
///////////////graphix/////////////
///////////////////////////////////
function title(){
  fill(0);
  textSize(45);
text("Ben's Galton Board",400, 50);

}

//my code
function tab1(){
  //graph tab
fill(255,140,0);
  rect(15,15,40,40)
  
fill(0);
  rect(22.5,35,5,15)
  rect(32.5,25,5,25)
  rect(42.5,40,5,10)
  
}	

function tab2(){
  //hex tab
fill(75,0,130);
  rect(70,15,40,40)
  
  fill(0);
  	hex(200,200,200,200);
 
  fill(75,0,130);
 
   polygon(90.5, 35, 15, 6); 
  
	

}

function tab3(){
  //text tab
fill(255,0,127);
  rect(125,15,40,40)
  
  
  fill(0);
  textSize(28);
text("T",137,45);
  
}

function display(){
  		//mouse location
  //1
if(mouseX>15 && mouseX<55 && mouseY> 16 && mouseY<54){tabShow1=true}else{tabShow1=false}
  //2
if(mouseX>70 && mouseX<110 && mouseY> 16 && mouseY<54){tabShow2=true}else{tabShow2=false}
  //3
if(mouseX>125 && mouseX<165 && mouseY> 16 && mouseY<54){tabShow3=true}else{tabShow3=false}
  	//current tab boolien
  if(tabShow1 == true && mouseIsPressed){one=true;two=false;three=false;}
    if(tabShow2 == true && mouseIsPressed){one=false;two=true;three=false;}
      if(tabShow3 == true && mouseIsPressed){one=false;two=false;three=true;}
  	//set current tab
  if(one === true){task1();}else{one=false}
  	if(two === true){task2();}else{two=false}
  		if(three === true){task3();}else{three=false}
}
  

//graph
function task1(){
fill(78);
  rect(20,65,1240,600)
fill(0);
  text("1",123,650);
  text("2",226,650);
  text("3",329,650);
  text("4",432,650);
  text("5",535,650);
  text("6",638,650);
  text("7",741,650);
  text("8",844,650);
  text("9",947,650);
  text("10",1050,650);
  text("11",1153,650);
  fill(0);
  for(i=0;i < dataTwo[12][1];i++){rect(115,(590 - (0.4*i)),40,20)}//1
  for(i=0;i < dataTwo[12][2];i++){rect(218,(590 - (0.4*i)),40,20)}//2
  for(i=0;i < dataTwo[12][3];i++){rect(321,(590 - (0.4*i)),40,20)}//3
  for(i=0;i < dataTwo[12][4];i++){rect(414,(590 - (0.4*i)),40,20)}//4
  for(i=0;i < dataTwo[12][5];i++){rect(527,(590 - (0.4*i)),40,20)}//5
  for(i=0;i < dataTwo[12][6];i++){rect(630,(590 - (0.4*i)),40,20)}//6
  for(i=0;i < dataTwo[12][7];i++){rect(733,(590 - (0.4*i)),40,20)}//7
  for(i=0;i < dataTwo[12][8];i++){rect(836,(590 - (0.4*i)),40,20)}//8
  for(i=0;i < dataTwo[12][9];i++){rect(939,(590 - (0.4*i)),40,20)}//9
  for(i=0;i < dataTwo[12][10];i++){rect(1042,(590 - (0.4*i)),40,20)}//10
  for(i=0;i < dataTwo[12][11];i++){rect(1145,(590 - (0.4*i)),40,20)}//11
  
  
}
//hex gen
function task2(){
fill(78);
  rect(20,65,1240,600)
  //draw display
  	fill(255,0,0)
  polygon(640, 105, 25, 6); 
  	fill(0);
  	textSize(18);
  text(dataTwo[0][0],620,110);
  //gen2
  	fill(255,69,0);
  polygon(600, 130, 25, 6);
  polygon(680, 130, 25, 6);
  	fill(0);
  text(dataTwo[1][0],580,135);
  text(dataTwo[1][1],660,135);
		fill(255,165,0);//3
  polygon(640, 155, 25, 6);
  polygon(560, 155, 25, 6);
  polygon(720, 155, 25, 6);
  	fill(0);
  text(dataTwo[2][0],540,160);
  text(dataTwo[2][1],620,160);
  text(dataTwo[2][2],700,160);
  fill(255, 174, 66)//4
  polygon(520, 180, 25, 6);
  polygon(600, 180, 25, 6);
  polygon(680, 180, 25, 6);
  polygon(760, 180, 25, 6);
  fill(0);
  text(dataTwo[3][0],500, 190);
  text(dataTwo[3][1],580, 190);
  text(dataTwo[3][2],660, 190);
  text(dataTwo[3][3],740, 190);
  fill(255,255,0);//5
  polygon(480,205, 25, 6);
	polygon(560,205, 25, 6);
  polygon(640,205, 25, 6);
  polygon(720,205, 25, 6);
  polygon(800,205, 25, 6);
  fill(0);
  text(dataTwo[4][0],460,210);
	text(dataTwo[4][1],540,210);
  text(dataTwo[4][2],620,210);
  text(dataTwo[4][3],700,210);
  text(dataTwo[4][4],780,210);
  fill(173,255,47);//6
  fill(0);
  text("ect...",640,360);
}
//text
function task3(){
fill(78);
  rect(20,65,1240,600)
  //a whole lota text
  fill(0);
  textSize(24);
  text("Amount of balls: "+rows,55,105);
  text("generations: "+ (cols-1),55,130);
  text("final ball count relitve to hole",600,105);
  text("0's: "+dataTwo[12][0],625,130)
  text("1's: "+dataTwo[12][1],625,155)
  text("2's: "+dataTwo[12][2],625,180)
  text("3's: "+dataTwo[12][3],625,205)
  text("4's: "+dataTwo[12][4],625,230)
  text("5's: "+dataTwo[12][5],625,255)
  text("6's: "+dataTwo[12][6],625,280)
  text("7's: "+dataTwo[12][7],625,305)
  text("8's: "+dataTwo[12][8],625,330)
  text("9's: "+dataTwo[12][9],625,355)
  text("10's: "+dataTwo[12][10],612,380)
  text("11's: "+dataTwo[12][11],612,405)
  text("12's: "+dataTwo[12][12],612,430)
}







//polly
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
