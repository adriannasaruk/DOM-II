// Your code goes here
const newNav = document.querySelector("h1");
newNav.addEventListener ("click", () => {
newNav.style.backgroundColor = "pink";
});

const header = document.querySelector("h1")
    header.addEventListener ("mouseenter", () => {
        header.style.color = "red";
});

const navi = document.querySelectorAll("a").forEach (tag => {
    tag.addEventListener ("mouseover", () =>{
        tag.style.border = "black dotted 2px"
    })  
});

const naviaway = document.querySelectorAll("a").forEach (tag => {
    tag.addEventListener ("mouseleave", ()=>{
        tag.style.border = "none"
    })
})

const image = document.querySelectorAll("img").forEach (tag => {
    window.addEventListener ("resize", () =>{
        tag.src = "img/fun.jpg"
        
    })
})

const adrian = document.querySelectorAll("a").forEach (tag => {
    tag.addEventListener("mousemove", (event) => {
        tag.style.transform= "scale(1.5)"
        tag.style.backgroundColor= "red"
        event.stopPropagation()
    })
})

const adrian2= document.querySelector("nav")
adrian2.addEventListener("mousemove", () => {
    adrian2.style.backgroundColor= "blue"
})

const adrian1 = document.querySelectorAll('img') .forEach (tag => {
 tag.addEventListener("dblclick", () =>{
     tag.style.border = "red 3px dotted"
 })
})

const body = document.querySelector("body");
window.addEventListener ("scroll", ()=>{
    body.style.backgroundColor = "lightblue"
})

const body1 = document.querySelector("body");
window.addEventListener ("wheel", () =>{
    body1.style.color = "red"
})

const hawaii = document.querySelectorAll("p").forEach (tag =>{
    tag.addEventListener("drag", () =>{
        tag.style.transform= "scale(2.0)"
        tag.style.color = "yellow"
    })
})

const stopLink = document.querySelectorAll("a"). forEach (tag => {
    tag.addEventListener("click", (event) => {
        console.log("stopped link");
        event.preventDefault();
      });
})
