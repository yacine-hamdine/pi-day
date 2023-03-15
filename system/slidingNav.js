let state = "closed";
document.querySelector("#menu-btn").onclick = () => {
    if(state == "closed"){
        document.querySelector("header > nav").style.display = "flex";
        state = "opened";
        return;
    }
    if(state == "opened"){
        document.querySelector("header > nav").style.display = "none";
        state = "closed";
        return;
    }
}