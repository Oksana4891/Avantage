window.addEventListener('DOMContentLoaded', () => {
    'use strict';


// ----------POPUP-----------//
function bindModal(triggerSelector, modalSelector, closeSelector,animationOpen, animationClose, closeClickOverlay = true) {
    const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        modals = document.querySelectorAll('.popup');
       

    triggers.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllModals();
            handelOpenModal();
        });
    });


    // Function close modal
    close.addEventListener('click', (e) => {
        modal.classList.add(animationClose);
        handelCloseModal(modal, animationOpen);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget && closeClickOverlay) {
            modal.classList.add(animationClose);
            handelCloseModal(modal, animationOpen);
        }
    });
     
    function handelCloseModal(modal, animationOpen) {
        document.body.style.overflow = "";
        modal.classList.remove('is-open');
        modal.classList.remove(animationOpen);
    } 

     // Function hide all modal

    function hideAllModals() {
        modals.forEach(item => {
            handelCloseModal(item);
        });
    }


     // Function open modal

    function handelOpenModal() {
        document.body.style.overflow = "hidden";
        modal.classList.add('is-open'); 
        modal.classList.add(animationOpen);
        modal.classList.remove(animationClose);
       
    }

}


const arrValue = document.querySelectorAll ('.range1_optionjs');
const arrBloksRange = document.querySelectorAll ('.js_blockValue');


arrBloksRange.forEach(item => {
    item.querySelector('.range-thumb').addEventListener('change', getRangeValue);
});


function getRangeValue(e) {
   const rangeValue = arrValue[this.value].value;
   e.target.previousElementSibling.style.paddingLeft=(arrValue[this.value].offsetLeft- 10)+"px";
   e.target.previousElementSibling.textContent=rangeValue;
  }


bindModal(".js-contactUs", ".js-popupCall", ".js-popupCall_close", 'faded', 'fadeOut');
bindModal(".js_price", ".js_popupPrice", ".js-pricePopup_close", 'faded', 'fadeOut');

});