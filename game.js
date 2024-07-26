
// ************************* Apply Key Events on window *********************************** //


window.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    action(e);
})

window.addEventListener('keyup', resetaction)


// ************************* Game Functionality Start *********************************** //
let movement = 20;
let move = false

function action (e) {
    if (e.key === 'd') {
        ironmanmove('farward')
    }
    else if (e.key === 'a') {
        ironmanmove('backward')
    }
    else if (e.key === 's') {
        ironmanmove('power')
    }
    else if (e.key === 'ArrowLeft') {
        hulkmove('farward');
    }
    else if (e.key === 'ArrowRight') {
        hulkmove('backward');
    }
    else if (e.key === 'Enter') {
        hulkmove('power');
    }
}


// ************************* Ironman function *********************************** //


let ironman = document.getElementById('ironman')
function ironmanmove (type) {
    if (type === 'farward') {
        if (move === false) {
            ironman.src = 'Images/ironman-farward.gif';
        }
            move = true
            movement += 5;
            ironman.style.left = `${movement}px`

    }
    else if (type === 'backward') {
        if (move === false) {
            ironman.src = 'Images/ironman-farward.gif';
        }
            move = true;
            movement -= 5;
            ironman.style.left = `${movement}px`
        
    }
    else if (type === 'power') {
        if (move === false) {
            ironman.src = 'Images/ironman-power.gif'
            ironman.style.width = `370px`;
        }
            move = true
    }
}
// ************************* Hulk Function *********************************** //

let hulk = document.getElementById('hulk')
function hulkmove (type) {
    if (type === 'farward') {
        if (!move) {
            hulk.src = 'Images/hulk-farward.gif';
        }
        movement += 5;
        hulk.style.right = `${movement}px`
        move = true
    }
    else if (type === 'backward') {
        if (!move) {
            hulk.src = 'Images/hulk-backward.gif';
        }
        move = true;
        movement -= 5;
        hulk.style.right = `${movement}px`
    }
    else if (type === 'power') {
        if (!move) {

            hulk.src = 'Images/hulk-power.gif';
        }
        move = true;
    }

} 

// ************************* Reset Game Functionality *********************************** //


function resetaction (event) {
    if (event.key === 'd' || event.key === 'a' || event.key === 's' ) {
        ironman.src = 'Images/iron-man-stance.gif'
        ironman.style.width = `200px`;
    }
    
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter' ) {
        hulk.src = 'Images/hulk-stance.gif'
    }
        
        move = false
}
//  ******************************* Game Animation End ******************************* // 
