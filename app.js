const contatoPopUp = document.getElementById('contacts-popup');

if(window.location.hash === '#contato') {
    contatoPopUp.hidden = false;
}

document.getElementById('contatoBtn').addEventListener('click', function() {
    contatoPopUp.hidden = false;
});

document.getElementById('closeContactPopUp').addEventListener('click', function() {
    contatoPopUp.hidden = true;
    window.location.hash = '';
});
