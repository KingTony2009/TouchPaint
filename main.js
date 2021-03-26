var mouseEvent="empty";
var last_x, last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
lineWidth=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    lineWidth=document.getElementById("line_width").value;
    mouseEvent="mousedown";
    
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  current_x=e.clientX - canvas.offsetLeft
  current_y=e.clientY-canvas.offsetTop;

  if(mouseEvent=="mousedown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.linewidth=lineWidth;

      console.log("Last position of x and y coordinates = ");
       console.log("x = " + last_x + "y = " + last_y);


       
      console.log("Current position of x and y coordinates = ");
      console.log("x = " + current_x + "y = " + current_y);
      ctx.moveTo(last_x, last_y);
      ctx.lineTo(current_x, current_y);
      ctx.stroke();

     
  }
  last_x=current_x;
  last_y=current_y;

}
var width= screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    lineWidth=document.getElementById("line_width").value;
    
    console.log ("touchstart");

    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
    
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
  current_x=e.touches[0].clientX - canvas.offsetLeft;
  current_y=e.touches[0].clientY-canvas.offsetTop;

 
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.linewidth=lineWidth;

      console.log("Last position of x and y coordinates = ");
       console.log("x = " + last_x + "y = " + last_y);


       
      console.log("Current position of x and y coordinates = ");
      console.log("x = " + current_x + "y = " + current_y);
      ctx.moveTo(last_x, last_y);
      ctx.lineTo(current_x, current_y);
      ctx.stroke();

     
  
  last_x=current_x;
  last_y=current_y;

}
function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}