// wel-come
console.log(`WEL-COME to Project 1`);

// insert

function randomNum() {
    // random number
    let r = 1000 + (10000 - 1000) * Math.random();
    let ar = Math.round(r);
    let rnd = document.getElementById(`rnd`);

    rnd.innerHTML = `<p id="rnp">${ar}</p>`

    console.log(rnd, btn, button);
}

let button = document.querySelector("#btn");
button.addEventListener("click", randomNum)


randomNum()