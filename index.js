const element = document.querySelector(".container");
const cols = 20;
const rows = 20;
for (let i = 0; i < cols*rows;i++){
    element.innerHTML += "<div class = 'cell'></div>"
}
let snake = [ { x:0 , y:0 }, { x:0 , y:1 }, { x:0 , y:2 }, { x:0 , y:3 } ];
let direction = "r";
window.addEventListener("keyup", function(event){
    console.log(event.code);
    switch(event.code){
        case "ArrowUp" : {
            direction = "t";
            break;
        }
        case "ArrowDown" : {
            direction = "b";
            break;
        }
        case "ArrowLeft" : {
            direction = "l";
            break;
        }
        case "ArrowRight" : {
            direction = "r";
            break;
        }
    }
})
function draw(){
    element.innerHTML = "";
    for (let i = 0; i < cols*rows;i++){
        element.innerHTML += "<div class = 'cell'></div>"
    }
    for(let coort of snake){
        const index = coort.x*cols + coort.y;
        const cell = element.children[index];
        cell.classList.add("snake");
    }
    const head = snake[snake.length-1];
    const newHead = { x : head.x, y : head.y}
    switch(direction){
        case "r" : {
            newHead.y-=-1;
            newHead.y = newHead.y === cols? 0 : newHead.y;
            break;
        }
        case "l" : {
            newHead.y-=1;
            newHead.y = newHead.y === cols-21? cols-1 : newHead.y;
            break;
        }
        case "t" : {
            newHead.x-=1;
            newHead.x = newHead.x === rows-21? rows-1 : newHead.x;
            break;
        }
        case "b" : {
            newHead.x-=-1;
            newHead.x = newHead.x === rows? 0 : newHead.x;
            break;
        }
    }
    snake.push(newHead);
    snake = snake.slice(1);

}
setInterval(draw,100);