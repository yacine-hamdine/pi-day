let btns = document.querySelectorAll(".pop-btn");
let popups = document.querySelectorAll(".popup");

btns.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector(`#${btn.id.split('-')[0]}-pop`).style.display = "flex";
        document.querySelector(`#${btn.id.split('-')[0]}-pop > div`).style.animation = "pop .1s ease-in-out 1";
    }
})

popups.forEach((popup) => {
    popup.onclick = (e) => {
        if(e.target.id == popup.id){
            popup.style.display = "none";
        }
    }
})