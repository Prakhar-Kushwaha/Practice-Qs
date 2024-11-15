// let para1= document.createElement("p");
// para1.innerText="Hey iam red!";
// document.querySelector("body").prepend(para1);
// para1.classList.add("red");

// let heading = document.createElement("h3");
// heading.innerText="Hey i am blue";
// document.querySelector("body").prepend(heading);
// heading.classList.add("h3");

// let div =document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("p");
// h1.innerText= "I am  in div";
// para2.innerText="Me too";
// div.append(h1);
// div.append(para2);
// document.querySelector("body").prepend(div);


// let btn =document.createElement("button");
// let input= document.createElement("input");
// btn.innerText= "Click me";
// document.querySelector("body").append(btn);
// document.querySelector("body").append(input);
// input.setAttribute("placeholder","username");
// btn.setAttribute("id", "btn");

// document.querySelector("button");
// document.querySelector("#btn");
// btn.classList.add("btn");








// let head= document.createElement("h1");
// head.innerText="Dom Practice";
// document.querySelector("body").append(head);
// head.setAttribute("class","domPractice");





// let p3= document.createElement("p");
// p3.innerHTML="Apna College <b> Delta</b> Practice";
// document.querySelector("body").append(p3);

// document.querySelector("body").style.textAlign= "center";

// let h1= document.createElement("h3");
// h1.innerText= "Generate a random color";
// document.querySelector("body").append(h1);
// h1.setAttribute("style","text-align :center");
// h1.style.marginBottom = "50px"

// let btn = document.createElement("button");
// btn.innerText="Generate Color";
// document.querySelector("body").append(btn);
// btn.setAttribute("style","margin: auto");// Atribute means the id or etc


// let box= document.createElement("div");
// box.innerText="This is your color";
// document.querySelector("body").append(box);


// let  r= Math.floor(Math.random()*256);
// let g=Math.floor(Math.random()*256);
//let b=Math.floor(Math.random()*256);


// btn.onclick= function generateColor()
// {
//     h1.innerText=`rgba ( ${r} , ${g} ,${b} )`; 
//     box.style.backgroundColor= `rgb(${r},${g},${b})`;   
// }

// btn.addEventListener("click", changeHeading);
// btn.addEventListener("click", generateColor);

// function changeHeading()
// {
//     h1.innerText=`rgba ( ${r} , ${g} ,${b} )`; 
// }

// function generateColor()
// {
    
//     box.style.backgroundColor= `rgb(${r},${g},${b})`;   
// }

//  document.querySelector("body").style.textAlign= "center";
// let h1 = document.createElement("h3");
// h1.innerText="This is para";
// document.querySelector("body").append(h1);
// document.querySelector("body").append(document.createElement("div"));
// document.querySelector("div").style.height="100px";

// let box = document.querySelector("div");


// // h1.addEventListener("click" ,()=>console.log("you click the para"));
// // box.addEventListener("mouseenter" ,()=>console.log("you hover the box"));

// box.addEventListener("mouseout",() => {console.log("MouseOut")});

// let input=document.createElement("input");
// input.setAttribute("type","password");
// input.setAttribute("placeholder","Enter anything");
// document.querySelector("body").append(input);


//input.addEventListener("keypress", function () {console.log(this.value);});
//let div =document.querySelector("div");
//div.addEventListener("scroll",() => console.log("Scrolling"));


// let btn=document.createElement("button");

// btn.style.marginTop="50px";
// document.querySelector("body").append(btn);
// btn.innerText="Click me";


// btn.addEventListener("click", ()=>{
//     btn.style.backgroundColor= "blue";
// });

// let input= document.createElement("input");
// input.setAttribute("placeholder","enter text");
// input.setAttribute("type","text");

// let head= document.createElement("h1");
// document.querySelector("body").append(input);
// document.querySelector("body").append(head);


// input.addEventListener("input",function (event){
//     head.innerText= this.value;
// });



// let div = document.querySelector("div");
// let ul= document.querySelector("ul");
// let li= document.querySelectorAll("li");

// div.addEventListener("click",(()=>{console.log("div was clicked")}));
// ul.addEventListener("click",((event)=>{
//     event.stopPropagation();
//     console.log("ol was clicked")}));
// li.addEventListener("click",
//     ()=>{
//         console.log("li is clicked")})



let btn= document.querySelector("button");
btn.addEventListener("click", function(){
    
    let list= document.createElement("li");
    list.innerText = document.querySelector("input").value;
    document.querySelector("ul").appendChild(list);
    document.querySelector("input").value="";
});