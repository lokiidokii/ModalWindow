'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.open-modal');

const openModal = function(){
    modal.classList.remove('hidden'); //show hidden 
    overlay.classList.remove('hidden'); 
    };

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    };

//open modal
for(let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);

//close modal via 'X' 
btnCloseModal.addEventListener('click', closeModal);

//close modal via overlay
overlay.addEventListener('click', closeModal);

//close modal via 'esc' keydown
document.addEventListener('keydown', function(esc){
    if(esc.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }   
});
