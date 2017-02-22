///////////////////////////////////////////////////
//Nektek

var orig = document.body.className;

// Wireframes

//Home page modal
var modalNektekWHome = document.getElementById('modal-nektek-wframe-home');
var nektekWHome = document.getElementById('nektek-wframe-home');
var modalImgNektekWHome = document.getElementById('img-nektek-wframe-home');
nektekWHome.onclick = function(){
    modalNektekWHome.style.display = "block";
    modalImgNektekWHome.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[0];
backdrop.onclick = function() {
    modalNektekWHome.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Team page modal
var modalNektekWTeam = document.getElementById('modal-nektek-wframe-team');
var nektekWTeam = document.getElementById('nektek-wframe-team');
var modalImgNektekWTeam = document.getElementById('img-nektek-wframe-team');
nektekWTeam.onclick = function(){
    modalNektekWTeam.style.display = "block";
    modalImgNektekWTeam.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[1];
backdrop.onclick = function() {
    modalNektekWTeam.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Team page modal
var modalNektekWProduct = document.getElementById('modal-nektek-wframe-product');
var nektekWProduct = document.getElementById('nektek-wframe-product');
var modalImgNektekWProduct = document.getElementById('img-nektek-wframe-product');
nektekWProduct.onclick = function(){
    modalNektekWProduct.style.display = "block";
    modalImgNektekWProduct.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[2];
backdrop.onclick = function() {
    modalNektekWProduct.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Contact page modal
var modalNektekWContact = document.getElementById('modal-nektek-wframe-contact');
var nektekWContact = document.getElementById('nektek-wframe-contact');
var modalImgNektekWContact = document.getElementById('img-nektek-wframe-contact');
nektekWContact.onclick = function(){
    modalNektekWContact.style.display = "block";
    modalImgNektekWContact.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[3];
backdrop.onclick = function() {
    modalNektekWContact.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockups
//Mockup 1 modal
var modalMockup1 = document.getElementById('modal-mockup1');
var mockup1 = document.getElementById('mockup1');
var modalImgMockup1 = document.getElementById('img-mockup1');
mockup1.onclick = function(){
    modalMockup1.style.display = "block";
    modalImgMockup1.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[4];
backdrop.onclick = function() {
    modalMockup1.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockup 2 modal
var modalMockup2 = document.getElementById('modal-mockup2');
var mockup2 = document.getElementById('mockup2');
var modalImgMockup2 = document.getElementById('img-mockup2');
mockup2.onclick = function(){
    modalMockup2.style.display = "block";
    modalImgMockup2.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[5];
backdrop.onclick = function() {
    modalMockup2.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockup 3 modal
var modalMockup3 = document.getElementById('modal-mockup3');
var mockup3 = document.getElementById('mockup3');
var modalImgMockup3 = document.getElementById('img-mockup3');
mockup3.onclick = function(){
    modalMockup3.style.display = "block";
    modalImgMockup3.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[6];
backdrop.onclick = function() {
    modalMockup3.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockup 4 modal
var modalMockup4 = document.getElementById('modal-mockup4');
var mockup4 = document.getElementById('mockup4');
var modalImgMockup4 = document.getElementById('img-mockup4');
mockup4.onclick = function(){
    modalMockup4.style.display = "block";
    modalImgMockup4.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[7];
backdrop.onclick = function() {
    modalMockup4.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockup 5 modal
var modalMockup5 = document.getElementById('modal-mockup5');
var mockup5 = document.getElementById('mockup5');
var modalImgMockup5 = document.getElementById('img-mockup5');
mockup5.onclick = function(){
    modalMockup5.style.display = "block";
    modalImgMockup5.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[8];
backdrop.onclick = function() {
    modalMockup5.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Mockup 6 modal
var modalMockup6 = document.getElementById('modal-mockup6');
var mockup6 = document.getElementById('mockup6');
var modalImgMockup6 = document.getElementById('img-mockup6');
mockup6.onclick = function(){
    modalMockup6.style.display = "block";
    modalImgMockup6.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[9];
backdrop.onclick = function() {
    modalMockup6.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
