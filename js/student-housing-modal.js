///////////////////////////////////////////////////
//Ubiq

var orig = document.body.className;

//Mockups
//Modal 1
var modal1 = document.getElementById('modal-1');
var mockup1 = document.getElementById('mockup-1');
var modalImg1 = document.getElementById('img-1');
mockup1.onclick = function(){
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
var mockup2 = document.getElementById('mockup-2');
var modalImg2 = document.getElementById('img-2');
mockup2.onclick = function(){
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
var mockup3 = document.getElementById('mockup-3');
var modalImg3 = document.getElementById('img-3');
mockup3.onclick = function(){
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
var mockup4 = document.getElementById('mockup-4');
var modalImg4 = document.getElementById('img-4');
mockup4.onclick = function(){
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
var mockup5 = document.getElementById('mockup-5');
var modalImg5 = document.getElementById('img-5');
mockup5.onclick = function(){
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
var mockup6 = document.getElementById('mockup-6');
var modalImg6 = document.getElementById('img-6');
mockup6.onclick = function(){
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
var mockup7 = document.getElementById('mockup-7');
var modalImg7 = document.getElementById('img-7');
mockup7.onclick = function(){
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
var mockup8 = document.getElementById('mockup-8');
var modalImg8 = document.getElementById('img-8');
mockup8.onclick = function(){
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
var mockup9 = document.getElementById('mockup-9');
var modalImg9 = document.getElementById('img-9');
mockup9.onclick = function(){
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
var mockup10 = document.getElementById('mockup-10');
var modalImg10 = document.getElementById('img-10');
mockup10.onclick = function(){
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
var mockup11 = document.getElementById('mockup-11');
var modalImg11 = document.getElementById('img-11');
mockup11.onclick = function(){
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
var mockup12 = document.getElementById('mockup-12');
var modalImg12 = document.getElementById('img-12');
mockup12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[11];
backdrop.onclick = function() {
    modal12.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Modal 13
var modal13 = document.getElementById('modal-13');
var mockup13 = document.getElementById('mockup-13');
var modalImg13 = document.getElementById('img-13');
mockup13.onclick = function(){
    modal13.style.display = "block";
    modalImg13.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[12];
backdrop.onclick = function() {
    modal13.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
/*
//Modal 14
var modal14 = document.getElementById('modal-14');
var mockup14 = document.getElementById('mockup-14');
var modalImg14 = document.getElementById('img-14');
mockup14.onclick = function(){
    modal14.style.display = "block";
    modalImg14.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[13];
backdrop.onclick = function() {
    modal14.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}*/

//Modal 15
var modal15 = document.getElementById('modal-15');
var mockup15 = document.getElementById('mockup-15');
var modalImg15 = document.getElementById('img-15');
mockup15.onclick = function(){
    modal15.style.display = "block";
    modalImg15.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[13];
backdrop.onclick = function() {
    modal15.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
