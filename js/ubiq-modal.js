///////////////////////////////////////////////////
//Ubiq

var orig = document.body.className;

//Mockups
//Modal 1
var modal1 = document.getElementById('modal-mockup-1');
var mockup1 = document.getElementById('mockup1');
var modalImg1 = document.getElementById('img-mockup-1');
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
var modal2 = document.getElementById('modal-mockup-2');
var mockup2 = document.getElementById('mockup2');
var modalImg2 = document.getElementById('img-mockup-2');
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
var modal3 = document.getElementById('modal-mockup-3');
var mockup3 = document.getElementById('mockup3');
var modalImg3 = document.getElementById('img-mockup-3');
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
var modal4 = document.getElementById('modal-mockup-4');
var mockup4 = document.getElementById('mockup4');
var modalImg4 = document.getElementById('img-mockup-4');
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
var modal5 = document.getElementById('modal-mockup-5');
var mockup5 = document.getElementById('mockup5');
var modalImg5 = document.getElementById('img-mockup-5');
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
var modal6 = document.getElementById('modal-mockup-6');
var mockup6 = document.getElementById('mockup6');
var modalImg6 = document.getElementById('img-mockup-6');
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
var modal7 = document.getElementById('modal-mockup-7');
var mockup7 = document.getElementById('mockup7');
var modalImg7 = document.getElementById('img-mockup-7');
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
var modal8 = document.getElementById('modal-mockup-8');
var mockup8 = document.getElementById('mockup8');
var modalImg8 = document.getElementById('img-mockup-8');
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
