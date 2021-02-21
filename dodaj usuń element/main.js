let btnDisplay = document.getElementById("add");
// console.log(buttonDisplay);

btnDisplay.onclick = function() {
    let pDescription = document.getElementById("tekst");
    pDescription.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus officia quaerat soluta explicabo tempora nesciunt, dignissimos aperiam. Nihil officiis amet debitis! Illo corrupti recusandae nemo, dolores nulla hic accusantium!';
}

let btnHide = document.getElementById("remove");
// console.log(btnHide);


btnHide.onclick = function() {
    let pDescriptionNone = document.getElementById("tekst");
    pDescriptionNone.innerText = '';
}