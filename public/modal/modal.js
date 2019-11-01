// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click event
modalBtn.addEventListener('click', openModal);

// Listen for close click event
closeBtn.addEventListener('click', closeModal);
// listen for Outside click
window.addEventListener('click', clickOutside)

//Create open modal function
function openModal() {
    modal.style.display = 'block';
}
//Create close modal function
function closeModal() {
    modal.style.display = 'none';
}
//function to close modal if outside click
function clickOutside(e) {
    if(e.target == modal){
    modal.style.display = 'none';
    }
}
