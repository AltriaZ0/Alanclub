var backpage="MP"
document.getElementById("IK_page").addEventListener("click", Change_Interknot)
document.getElementById("main_page").addEventListener("click", Change_Interknot)
document.getElementById("PJ_page").addEventListener("click", Change_Interknot)
document.getElementById("P_page").addEventListener("click", Change_Interknot)
document.getElementById("E_page").addEventListener("click", Change_Interknot)

function Change_Interknot(){
    x=this.id

    if (x=="IK_page"){
        document.getElementById(backpage).style.animation="Faded 0.5s"
        document.getElementById(backpage).style.display="none";
        var y=document.getElementById("IK");
        y.style.animation="unFaded 0.5s";
        y.style.display="inline";
        backpage=y.id

        z=document.getElementsByClassName("html_header_a_main")
        z[0].className="html_header_a"
        xx=document.getElementById(x).className
        document.getElementById(x).className="html_header_a_main"
        z=document.getElementsByClassName("html_header_a_main")
    };

    if (x=="main_page"){
        document.getElementById(backpage).style.animation="Faded 0.5s"
        document.getElementById(backpage).style.display="none";
        var y=document.getElementById("MP");
        y.style.animation="unFaded 0.5s";
        y.style.display="inline";
        backpage=y.id
        z=document.getElementsByClassName("html_header_a_main")
        z[0].className="html_header_a"
        xx=document.getElementById(x).className
        document.getElementById(x).className="html_header_a_main"
        z=document.getElementsByClassName("html_header_a_main")
    };

    if (x=="PJ_page"){
        document.getElementById(backpage).style.animation="Faded 0.5s"
        document.getElementById(backpage).style.display="none";
        var y=document.getElementById("PJ");
        y.style.animation="unFaded 0.5s";
        y.style.display="inline";
        backpage=y.id
        z=document.getElementsByClassName("html_header_a_main")
        z[0].className="html_header_a"
        xx=document.getElementById(x).className
        document.getElementById(x).className="html_header_a_main"
        z=document.getElementsByClassName("html_header_a_main")
    };

    if (x=="P_page"){
        document.getElementById(backpage).style.animation="Faded 0.5s"
        document.getElementById(backpage).style.display="none";
        var y=document.getElementById("PP");
        y.style.animation="unFaded 0.5s";
        y.style.display="flex";
        backpage=y.id
        z=document.getElementsByClassName("html_header_a_main")
        z[0].className="html_header_a"
        xx=document.getElementById(x).className
        document.getElementById(x).className="html_header_a_main"
        z=document.getElementsByClassName("html_header_a_main")
    };

    if (x=="E_page"){
        document.getElementById(backpage).style.animation="Faded 0.5s"
        document.getElementById(backpage).style.display="none";
        var y=document.getElementById("PE");
        y.style.animation="unFaded 0.5s";
        y.style.display="inline";
        backpage=y.id
        z=document.getElementsByClassName("html_header_a_main")
        z[0].className="html_header_a"
        xx=document.getElementById(x).className
        document.getElementById(x).className="html_header_a_main"
        z=document.getElementsByClassName("html_header_a_main")
    };

}


function playAudio() {  
var x = document.getElementById("audio1");   

if ( document.getElementById("musicbutton").style.color != "black")
   {document.getElementById("musicbutton").style.color = "black";
   document.getElementById("musicbutton").style.backgroundColor = "white";
   document.getElementById("musicbutton").classList.add('animate3');
   x.play();

} 

else{
    document.getElementById("musicbutton").style.color = "#787878";
    document.getElementById("musicbutton").style.backgroundColor = "black";
    document.getElementById("musicbutton").classList.remove('animate3');
    x.pause();}     
}   

window.addEventListener('scroll', function() {
var element1 = document.getElementById('Word_main_CNname');
var element2 = document.getElementById('Word_main_ENname');
var element3 = document.getElementById('Word_main_Num');
var element4 = document.getElementById('Inter-knot-box');

var element5 = document.getElementById('Word_CL_CNname');
var element6 = document.getElementById('Word_CL_ENname');
var element7 = document.getElementById('Word_CL_Num');

var element8 = document.getElementById('Word_MY_CNname');
var element9 = document.getElementById('Word_MY_ENname');
var element10 = document.getElementById('Word_MY_Num');
var element14 = document.getElementById('PROJECT_BOX');

var element11 = document.getElementById('Word_SHOW_CNname');
var element12 = document.getElementById('Word_SHOW_ENname');
var element13 = document.getElementById('Word_SHOW_Num');
var element15 = document.getElementById('SHOW_VIDEO_BOX');



//---------02动画

if (window.scrollY > 600) { // 当页面向下滚动超过100px时 
setTimeout(function() {
    element1.classList.add('animate'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element2.classList.add('animate'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element3.classList.add('animate'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
    element4.classList.add('animate_Inter_knot_box'); // 为元素添加动画类);
}, 200);
} else {
setTimeout(function() {
    element1.classList.remove('animate'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element2.classList.remove('animate'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element3.classList.remove('animate'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
  element4.classList.remove('animate_Inter_knot_box'); // 为元素添加动画类);
}, 200);
}


//---------04动画
if (window.scrollY > 2200) { // 当页面向下滚动超过100px时 
setTimeout(function() {
    element5.classList.add('animate'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element6.classList.add('animate'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element7.classList.add('animate'); // 为元素添加动画类);
}, 200);

} else {
setTimeout(function() {
    element5.classList.remove('animate'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element6.classList.remove('animate'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element7.classList.remove('animate'); // 为元素添加动画类);
}, 200);
}

//---------03动画

if (window.scrollY > 1300) { // 当页面向下滚动超过100px时 
setTimeout(function() {
    element8.classList.add('animate2'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element9.classList.add('animate2'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element10.classList.add('animate2'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
    element14.classList.add('animate_showbox1'); // 为元素添加动画类);
}, 200);


} else {
setTimeout(function() {
    element8.classList.remove('animate2'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element9.classList.remove('animate2'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element10.classList.remove('animate2'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
    element14.classList.remove('animate_showbox1'); // 为元素添加动画类);
}, 200);
}

//---------05动画

if (window.scrollY > 3000) { // 当页面向下滚动超过100px时 
setTimeout(function() {
    element11.classList.add('animate2'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element12.classList.add('animate2'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element13.classList.add('animate2'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
    element15.classList.add('animate_showbox2'); // 为元素添加动画类);
}, 200);

} else {
setTimeout(function() {
    element11.classList.remove('animate2'); // 为元素添加动画类);
}, 0);
setTimeout(function() {
    element12.classList.remove('animate2'); // 为元素添加动画类);
}, 100);
setTimeout(function() {
    element13.classList.remove('animate2'); // 为元素添加动画类);
}, 200);
setTimeout(function() {
    element15.classList.remove('animate_showbox2'); // 为元素添加动画类);
}, 200);
}

}
);




function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}


var left=document.querySelector(".button_left");
var right=document.querySelector(".button_right");
var m=document.querySelectorAll(".m");
var photoes=document.querySelector(".photoes");
var photoesl=document.querySelectorAll(".photo");
var index=0;
var time;

function photolength(){
photoes.style.width=(photoesl.length *46) + "vw"
}
photolength()

function position(){
photoes.style.left =(index * -100) + "%"
}

function add(){
if (index >= m.length -1){
    index=0
}
else{
    index++
}
}

function desc(){
if (index<1){
    index = m.length -1
}
else{
    index--
}
}
/* 自动轮播
function timer(){
time=setInterval(() => {
    index++
    desc()
    add()
    position()
},3000)
}
*/

left.addEventListener("click",() => {
desc()
position()
clearInterval(time)
timer()
})

right.addEventListener("click",() => {
add()
position()
clearInterval(time)
timer()
})



for(let i=0; i<m.length; i++){
m[i].addEventListener("click",() =>{
    index=i;
    position();
    clearInterval(time)
    timer()
})

}

for(let i=0; i<m.length; i++){
photoesl[i].addEventListener("click",() =>{
    index=i;
    position();
    clearInterval(time)
    timer()
})

}
var more=document.querySelectorAll(".More_word");
var word=document.querySelectorAll(".main_Word");
var more_on=new Array()

for (let i=0;i<more.length;i++){
more_on.push(0)
more[i].addEventListener("click",function(){
    if(more_on[i]==0){
        word[i].classList.add('animate_more_word')
        word[i].style.maxHeight="200vw";
        more_on[i]=1;
        word[i].classList.remove('animate_close_word')
        more[i].textContent="收起全文"

        ch=window.getComputedStyle(word[i]).height
        hh=window.getComputedStyle(word[i]).height
        setTimeout(function() {
            h=window.getComputedStyle(document.querySelector('.PJ_main_box')).height
            hh=window.getComputedStyle(word[i]).height
            document.querySelector('.PJ_main_box').style.height=parseInt(h)+parseInt(hh)-parseInt(ch) +"px";
}, 1500);

    }   
    else{
        word[i].classList.remove('animate_more_word')
        word[i].classList.add('animate_close_word')
        word[i].style.maxHeight="30vw";
        more_on[i]=0
        more[i].textContent="展开全文"

        ch=window.getComputedStyle(word[i]).height
        setTimeout(function() {
            h=window.getComputedStyle(document.querySelector('.PJ_main_box')).height
            hh=window.getComputedStyle(word[i]).height
            document.querySelector('.PJ_main_box').style.height=parseInt(h)+parseInt(hh)-parseInt(ch) +"px";
}, 1500);
    }
    })
}
timer();

