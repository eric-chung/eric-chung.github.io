///////////////////////////////////////////////////
//Clear Spider

var orig = document.body.className;

//Problems

//Problem 1 modal
var modalProblem1 = document.getElementById('modal-problem1');
var problem1 = document.getElementById('problem1');
var modalImgProblem1 = document.getElementById('img-problem1');
problem1.onclick = function(){
    modalProblem1.style.display = "block";
    modalImgProblem1.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[0];
backdrop.onclick = function() {
    modalProblem1.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Problem 2 modal
var modalProblem2 = document.getElementById('modal-problem2');
var problem2 = document.getElementById('problem2');
var modalImgProblem2 = document.getElementById('img-problem2');
problem2.onclick = function(){
    modalProblem2.style.display = "block";
    modalImgProblem2.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[1];
backdrop.onclick = function() {
    modalProblem2.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Problem 3 modal
var modalProblem3 = document.getElementById('modal-problem3');
var problem3 = document.getElementById('problem3');
var modalImgProblem3 = document.getElementById('img-problem3');
problem3.onclick = function(){
    modalProblem3.style.display = "block";
    modalImgProblem3.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[2];
backdrop.onclick = function() {
    modalProblem3.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}

//Problem 4 modal
var modalProblem4 = document.getElementById('modal-problem4');
var problem4 = document.getElementById('problem4');
var modalImgProblem4 = document.getElementById('img-problem4');
problem4.onclick = function(){
    modalProblem4.style.display = "block";
    modalImgProblem4.src = this.src;
    document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
}

var backdrop = document.getElementsByClassName('modal-backdrop')[3];
backdrop.onclick = function() {
    modalProblem4.style.display = "none";
    document.body.className = document.body.className.replace(/ ?modal-open/, '');
}
