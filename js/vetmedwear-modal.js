///////////////////////////////////////////////////
//Nektek

var orig = document.body.className;

// Wireframes

//Forearm Front
var modalForearmF = document.getElementById('modal-forearm-f');
var forearmF = document.getElementById('forearm-f');
var modalImgForearmF = document.getElementById('img-forearm-f');
forearmF.onclick = function(){
    modalForearmF.style.display = "block";
    modalImgForearmF.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[0];
backdrop.onclick = function() {
    modalForearmF.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Forearm Back
var modalForearmB = document.getElementById('modal-forearm-b');
var forearmB = document.getElementById('forearm-b');
var modalImgForearmB = document.getElementById('img-forearm-b');
forearmB.onclick = function(){
    modalForearmB.style.display = "block";
    modalImgForearmB.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[1];
backdrop.onclick = function() {
    modalForearmB.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mask Front
var modalMaskF = document.getElementById('modal-mask-f');
var maskF = document.getElementById('mask-f');
var modalImgMaskF = document.getElementById('img-mask-f');
maskF.onclick = function(){
    modalMaskF.style.display = "block";
    modalImgMaskF.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[2];
backdrop.onclick = function() {
    modalMaskF.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mask Back
var modalMaskB = document.getElementById('modal-mask-b');
var maskB = document.getElementById('mask-b');
var modalImgMaskB = document.getElementById('img-mask-b');
maskB.onclick = function(){
    modalMaskB.style.display = "block";
    modalImgMaskB.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[3];
backdrop.onclick = function() {
    modalMaskB.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//POS Front
var modalPosF = document.getElementById('modal-pos-f');
var posF = document.getElementById('pos-f');
var modalImgPosF = document.getElementById('img-pos-f');
posF.onclick = function(){
    modalPosF.style.display = "block";
    modalImgPosF.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[4];
backdrop.onclick = function() {
    modalPosF.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//POS Back
var modalPosB = document.getElementById('modal-pos-b');
var posB = document.getElementById('pos-b');
var modalImgPosB = document.getElementById('img-pos-b');
posB.onclick = function(){
    modalPosB.style.display = "block";
    modalImgPosB.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[5];
backdrop.onclick = function() {
    modalPosB.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
