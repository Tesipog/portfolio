
var typed = new Typed(".typing",{
    strings:["","Python Develepor","Machine Learning","Figma designer","Web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector('.nav'),
     navlist = nav.querySelectorAll("li"),
     totalNavList  = navlist.length;
     allsection =document.querySelectorAll(".section"),
     totalsection =allsection.length;
     for(let i=0;i<totalNavList;i++){
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let i=0;i<totalsection;i++){
                allsection[i].classList.remove("active");
            }
            for(let j=0;j<totalNavList;j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                   allsection[j].classList.add("back=section");
                }
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
     }
     function showSection(element){
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#"+target).classList.add("active")
     }
     function updateNav(element){
        for(let i=0;i<totalNavList;i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target===navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
        }
     }
     document.querySelector(".hire-me").addEventListener("click",function(){
        showSection(this)
        updateNav(this);
     })
     const navTogglerbtn = document.querySelector(".nav-toggler"),
         aside =document.querySelector(".aside");
         navTogglerbtn.addEventListener("click",()=>{
            asideSectionTogglerbtn();
         })
         function asideSectionTogglerbtn(){
            aside.classList.toggle("open");
            navTogglerbtn.classList.toggle("open");
            for(let i=0;i<totalsection;i++){
                allsection[i].classList.toggle("open")
            }
         }