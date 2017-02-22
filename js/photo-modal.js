///////////////////////////////////////////////////
//Photos

var orig = document.body.className;

//Modal 1
var modal1 = document.getElementById('modal-1');
var img1 = document.getElementById('stella-field');
var modalImg1 = document.getElementById('img-1');
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[0];
backdrop.onclick = function() {
    modal1.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 2
var modal2 = document.getElementById('modal-2');
var img2 = document.getElementById('nellie-leaves');
var modalImg2 = document.getElementById('img-2');
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[1];
backdrop.onclick = function() {
    modal2.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 3
var modal3 = document.getElementById('modal-3');
var img3 = document.getElementById('that-part');
var modalImg3 = document.getElementById('img-3');
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[2];
backdrop.onclick = function() {
    modal3.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 4
var modal4 = document.getElementById('modal-4');
var img4 = document.getElementById('basic-shot');
var modalImg4 = document.getElementById('img-4');
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[3];
backdrop.onclick = function() {
    modal4.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 5
var modal5 = document.getElementById('modal-5');
var img5 = document.getElementById('starboy');
var modalImg5 = document.getElementById('img-5');
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[4];
backdrop.onclick = function() {
    modal5.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 6
var modal6 = document.getElementById('modal-6');
var img6 = document.getElementById('ryan-naked');
var modalImg6 = document.getElementById('img-6');
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[5];
backdrop.onclick = function() {
    modal6.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 7
var modal7 = document.getElementById('modal-7');
var img7 = document.getElementById('mooneys-flowers');
var modalImg7 = document.getElementById('img-7');
img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[6];
backdrop.onclick = function() {
    modal7.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 8
var modal8 = document.getElementById('modal-8');
var img8 = document.getElementById('ottawa-couple');
var modalImg8 = document.getElementById('img-8');
img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[7];
backdrop.onclick = function() {
    modal8.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 9
var modal9 = document.getElementById('modal-9');
var img9 = document.getElementById('true-colors');
var modalImg9 = document.getElementById('img-9');
img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[8];
backdrop.onclick = function() {
    modal9.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 10
var modal10 = document.getElementById('modal-10');
var img10 = document.getElementById('hongdae');
var modalImg10 = document.getElementById('img-10');
img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[9];
backdrop.onclick = function() {
    modal10.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 11
var modal11 = document.getElementById('modal-11');
var img11 = document.getElementById('ottawa-bridge');
var modalImg11 = document.getElementById('img-11');
img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[10];
backdrop.onclick = function() {
    modal11.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 12
var modal12 = document.getElementById('modal-12');
var img12 = document.getElementById('ottawa-bridge-2');
var modalImg12 = document.getElementById('img-12');
img12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[11];
backdrop.onclick = function() {
    modal12.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
