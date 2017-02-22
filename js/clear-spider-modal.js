///////////////////////////////////////////////////
//Clear Spider

var orig = document.body.className;

//Wireframes

//Overview modal
var modalOverview = document.getElementById('modal-overview');
var overview = document.getElementById('overview');
var modalImgOverview = document.getElementById('img-overview');
overview.onclick = function(){
    modalOverview.style.display = "block";
    modalImgOverview.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[0];
backdrop.onclick = function() {
    modalOverview.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');

}
//View Order modal
var modalView = document.getElementById('modal-view-order');
var view = document.getElementById('view-order');
var modalImgView = document.getElementById('img-view-order');
view.onclick = function(){
    modalView.style.display = "block";
    modalImgView.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[1];
backdrop.onclick = function() {
    modalView.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Create New Order modal
var modalNew = document.getElementById('modal-new-order');
var newOrder = document.getElementById('new-order');
var modalImgNew = document.getElementById('img-new-order');
newOrder.onclick = function(){
    modalNew.style.display = "block";
    modalImgNew.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[2];
backdrop.onclick = function() {
    modalNew.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Fill Order - Empty modal
var modalFillEmpty = document.getElementById('modal-fill-empty');
var fillEmpty = document.getElementById('fill-empty');
var modalImgFillEmpty = document.getElementById('img-fill-empty');
fillEmpty.onclick = function(){
    modalFillEmpty.style.display = "block";
    modalImgFillEmpty.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[3];
backdrop.onclick = function() {
    modalFillEmpty.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Fill Order - Full modal
var modalFillFull = document.getElementById('modal-fill-full');
var fillFull = document.getElementById('fill-full');
var modalImgFillFull = document.getElementById('img-fill-full');
fillFull.onclick = function(){
    modalFillFull.style.display = "block";
    modalImgFillFull.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[4];
backdrop.onclick = function() {
    modalFillFull.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Review Order modal
var modalReview = document.getElementById('modal-review');
var review = document.getElementById('review');
var modalImgReview = document.getElementById('img-review');
review.onclick = function(){
    modalReview.style.display = "block";
    modalImgReview.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[5];
backdrop.onclick = function() {
    modalReview.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Confirmation Order modal
var modalConfirmation = document.getElementById('modal-confirmation');
var confirmation = document.getElementById('confirmation');
var modalImgConfirmation = document.getElementById('img-confirmation');
confirmation.onclick = function(){
    modalConfirmation.style.display = "block";
    modalImgConfirmation.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[6];
backdrop.onclick = function() {
    modalConfirmation.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}




//Screens

//Overview modal
var modalScreenOverview = document.getElementById('modal-screen-overview');
var screenOverview = document.getElementById('screen-1');
var modalScreenImgOverview = document.getElementById('img-screen-overview');
screenOverview.onclick = function(){
    modalScreenOverview.style.display = "block";
    modalScreenImgOverview.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[7];
backdrop.onclick = function() {
    modalScreenOverview.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');

}

//Pending modal
var modalScreenPending = document.getElementById('modal-screen-pending');
var screenPending = document.getElementById('screen-2');
var modalScreenImgPending = document.getElementById('img-screen-pending');
screenPending.onclick = function(){
    modalScreenPending.style.display = "block";
    modalScreenImgPending.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[8];
backdrop.onclick = function() {
    modalScreenPending.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//View Order modal
var modalScreenView = document.getElementById('modal-screen-view-order');
var screenView = document.getElementById('screen-3');
var modalScreenImgView = document.getElementById('img-screen-view-order');
screenView.onclick = function(){
    modalScreenView.style.display = "block";
    modalScreenImgView.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[9];
backdrop.onclick = function() {
    modalScreenView.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Create New Order modal
var modalScreenNew = document.getElementById('modal-screen-new-order');
var screenNew = document.getElementById('screen-4');
var modalScreenImgNew = document.getElementById('img-screen-new-order');
screenNew.onclick = function(){
    modalScreenNew.style.display = "block";
    modalScreenImgNew.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[10];
backdrop.onclick = function() {
    modalScreenNew.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Fill Order - Empty modal
var modalScreenFillEmpty = document.getElementById('modal-screen-fill-empty');
var screenFillEmpty = document.getElementById('screen-5');
var modalScreenImgFillEmpty = document.getElementById('img-screen-fill-empty');
screenFillEmpty.onclick = function(){
    modalScreenFillEmpty.style.display = "block";
    modalScreenImgFillEmpty.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[11];
backdrop.onclick = function() {
    modalScreenFillEmpty.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Add to Order modal
var modalScreenAdd = document.getElementById('modal-screen-add-order');
var screenAdd = document.getElementById('screen-6');
var modalScreenImgAdd = document.getElementById('img-screen-add-order');
screenAdd.onclick = function(){
    modalScreenAdd.style.display = "block";
    modalScreenImgAdd.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[12];
backdrop.onclick = function() {
    modalScreenAdd.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}


//Fill Order - Full modal
var modalScreenFillFull = document.getElementById('modal-screen-fill-full');
var screenFillFull = document.getElementById('screen-7');
var modalScreenImgFillFull = document.getElementById('img-screen-fill-full');
screenFillFull.onclick = function(){
    modalScreenFillFull.style.display = "block";
    modalScreenImgFillFull.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[13];
backdrop.onclick = function() {
    modalScreenFillFull.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Review Order modal
var modalScreenReview = document.getElementById('modal-screen-review');
var screenReview = document.getElementById('screen-8');
var modalScreenImgReview = document.getElementById('img-screen-review');
screenReview.onclick = function(){
    modalScreenReview.style.display = "block";
    modalScreenImgReview.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[14];
backdrop.onclick = function() {
    modalScreenReview.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Confirmation Order modal
var modalScreenConfirmation = document.getElementById('modal-screen-confirmation');
var screenConfirmation = document.getElementById('screen-9');
var modalScreenImgConfirmation = document.getElementById('img-screen-confirmation');
screenConfirmation.onclick = function(){
    modalScreenConfirmation.style.display = "block";
    modalScreenImgConfirmation.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[15];
backdrop.onclick = function() {
    modalScreenConfirmation.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

///////////////////////////////////////////////////
//Nektek

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

var backdrop = document.getElementsByClassName('modal-backdrop')[16];
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

var backdrop = document.getElementsByClassName('modal-backdrop')[17];
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

var backdrop = document.getElementsByClassName('modal-backdrop')[18];
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

var backdrop = document.getElementsByClassName('modal-backdrop')[19];
backdrop.onclick = function() {
    modalNektekWContact.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
