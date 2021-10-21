class Queue {
    constructor() {
        this.arr = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
    }

    enqueue(value) {
        this.arr.push(value);
    }

    dequeue() {
        this.arr.shift();
    }

    length() {
        return this.arr.length;
    }

    peek(value) {
        return this.arr[value];
    }
}


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorLen = 6;

const color = document.querySelector(".color-text");
const changeBtn = document.querySelector(".change-btn");
const previousColors = document.querySelectorAll(".previous-color");
const queue = new Queue();

changeBtn.addEventListener("click", () => {
    let randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;

    for (let i = 0; i < queue.length(); i++) {
        previousColors[i].style.backgroundColor = queue.peek(i);
    }

    if (queue.length() > 4) {
        queue.dequeue();
    }

    queue.enqueue(randomColor);
});

function getRandomColor() {
    let num = "#";
    for (let i = 0; i < colorLen; i++) {
        num += hex[Math.floor(Math.random() * hex.length)];
    }
    return num;
}