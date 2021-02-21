let btnDisplay = document.querySelector('button');


btnDisplay.onclick = function() {
    let value1 = document.getElementById("addName").value;
    let value2 = document.getElementById("addSurname").value;
    let value3 = document.getElementById("addPhone").value;

    let pName = document.getElementById("name");
    pName.innerText = value1;

    let pSurname = document.getElementById("surname");
    pSurname.innerText = value2;

    let pPhone = document.getElementById("phone");
    pPhone.innerText = value3;
}