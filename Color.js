var sq=document.getElementsByClassName("squares");
var colordisp=document.querySelector("#colordisplay");
var msg=document.getElementById("messagedisplay");
var resetbutton=document.querySelector("#newbtn");
var easybutton=document.querySelector("#easybtn");
var hardbutton=document.querySelector("#hardbtn");
var h1=document.querySelector("h1");
var n=sq.length;
var colors= generateRandomColor(sq.length);
var pickedcolor = pickcolor();

easybutton.addEventListener("click",function(){
    colors = generateRandomColor(3);
    pickedcolor=pickcolor();
    colordisp.textContent=pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        if(colors[i])
        {
        sq[i].style.background=colors[i];
        }
        else{
        sq[i].style.display="none";
        }
    }
    n=n/2;
})
hardbutton.addEventListener("click",function(){
    colors = generateRandomColor(6);
    pickedcolor=pickcolor();
    colordisp.textContent=pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=colors[i];
        sq[i].style.display="block";
    }
})
resetbutton.addEventListener("click",function(){
    colors = generateRandomColor(sq.length);
    pickedcolor=pickcolor();
    colordisp.textContent=pickedcolor;
    this.textContent="NEW COLORS";
    msg.textContent="";
    //change colors of squares
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=colors[i];
    }
    h1.style.background = "#232323";
})
colordisp.textContent = pickedcolor;

for(var i=0; i<n; i++)
{
    sq[i].style.background = colors[i];

    sq[i].addEventListener("click",function(){
        var clickedcolor = this.style.background;
        if(clickedcolor===pickedcolor)
        {
            msg.textContent="Correct";
            h1.style.background=pickedcolor;
            resetbutton.textContent="Play Again?"
            changecolors(clickedcolor);
        }
        else{
            this.style.background ="#232323";
            msg.textContent="Try Again!";
        }
    });
}
function changecolors(color)
{
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=color;
    }
}
function pickcolor()
{
   var random = Math.floor(Math.random() *colors.length);
   return colors[random];
}
function generateRandomColor(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(RandomColors());
    }
    return arr;
}
function RandomColors()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g + ", " + b + ")";
}
