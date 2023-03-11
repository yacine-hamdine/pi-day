let oldScrollY = window.scrollY;
let scrollDir = "";
window.onscroll = function(e){
    if(oldScrollY < window.scrollY){
        scrollDir = "Down";
    } else {
        scrollDir = "Up";
    }
    oldScrollY = window.scrollY;
  }

let navBtns = document.querySelectorAll("header > nav > div > a");

let options = {
    threshold: 0.5,
};
  
let explore = document.querySelector("#explore");

let callbackExp = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            navBtns.forEach((link) => {
                link.classList.remove("active");
                document.querySelector("a#explore-btn").classList.add("active");
            });
            window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "title", "index.html#explore");
            document.querySelector("header").style.background = "#ffffff";
            document.querySelector("header").style.borderBottom = "2px solid #000000";
        }
        if(!entry.isIntersecting && scrollDir == "Up"){
            navBtns.forEach((link) => {
                link.classList.remove("active");
                document.querySelector("a#home-btn").classList.add("active");
            });
            window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "title", "index.html#home");
            document.querySelector("header").style.background = "";
            document.querySelector("header").style.borderBottom = "none";
        }
    });
};

let observerExp = new IntersectionObserver(callbackExp, options);

observerExp.observe(explore);


let schedule = document.querySelector("#schedule");

let callbackSch = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            navBtns.forEach((link) => {
                link.classList.remove("active");
                document.querySelector("a#schedule-btn").classList.add("active");
            });
            window.history.replaceState({ additionalInformation: 'Updated the URL with JS' }, "title", "index.html#schedule");
        }
    });
};

let observerSch = new IntersectionObserver(callbackSch, options);

observerSch.observe(schedule);