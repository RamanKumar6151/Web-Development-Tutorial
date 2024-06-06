document.write("Functions as an arguments<br>");
document.write("Anonymous functions<br>");
let a_add=function (x, y){
    return x+y;
};
let a_mult=function (x,y){
    return x*y;
};
function action (x,y, z){
    let r=z(x,y);
    return r;
}
let a_ans1=action(10,20,a_add);
let a_ans2=action(10,20,a_mult);
document.write(a_ans1,"<br>")
document.write(a_ans2,"<br>")

document.write("<br>");
document.write("arrow function<br>");
let arr_ans=(x,y)==>