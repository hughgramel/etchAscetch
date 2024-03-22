const grid = document.querySelector(".flexbox-item-5")

// 380 * 400

function create() {

    for (i = 0; i < 342; i++) {
        let button = document.createElement("div")
        button.setAttribute("class", "square-div");
        grid.appendChild(button);
    }
}
create()


let mousedown = false;

const allSquares = document.querySelectorAll(".square-div")
allSquares.forEach(function(square) {
    square.addEventListener("mouseover", (e) =>{
    
        if(e.buttons == 1 || e.buttons == 3){
            e.target.setAttribute("class", "square-div-white")
        }
    
    });
    square.addEventListener("click", (e) =>{
        e.target.setAttribute("class", "square-div-white")
    });    
});