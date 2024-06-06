"use strict"

// Functions 01
document.write("JS Functions<br><br>")
function getmax(a, b){
    if(a>b){
        return a;
    }
    return b;
}
let ans=getmax(10,20);;
document.write(ans,"<br><br>")

document.write("pass by value<br>")
function make_change(a,b,c){
    a=10;
    b=[1,2,3,4,5];
    c[0]=30;
}
let x=4;
let y=[5,6,7,8,9];
let z=[10,20,40,50];
make_change(x,y,z);
document.write(x,"<br>")
document.write(y,"<br>")
document.write(z,"<br>")

document.write("<br>")

document.write("Anonymous functions<br>")
let a_function=function (x, y){
    return x+y;
};
let a_ans=a_function(10,20);
document.write(a_ans,"<br>")