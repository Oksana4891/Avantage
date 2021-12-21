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

// ----------Render and change input value (range)--------//

function getRangeInput() {

const rangeBlocks = document.querySelectorAll ('.range-block');
rangeBlocks.forEach (block => {
    const arrValue = block.querySelectorAll ('.range_value-list option');
    const inputSelector = block.querySelector ('.range-thumb');
    const buttonIcrement = block.querySelector ('.range_icrement');
    const buttonDecrement = block.querySelector ('.range_decrement');
    let inputValue = inputSelector.value;
    renderRangeValue(inputSelector,inputValue, arrValue);
    
    inputSelector.addEventListener('change', getRangeValue);
    buttonIcrement.addEventListener('click', function (event){
        inputSelector.stepUp(1);
        inputValue = inputSelector.value;
        renderRangeValue(inputSelector,inputValue, arrValue);

    });

    buttonDecrement.addEventListener('click', function (event){
        inputSelector.stepDown(1);
        inputValue = inputSelector.value;
        renderRangeValue(inputSelector,inputValue, arrValue);
    });

    function getRangeValue(e) {
        inputValue = this.value;
        renderRangeValue(inputSelector,inputValue, arrValue);
         }
})


  function renderRangeValue (inputSelectot, inputValue, arrValue) {
    const rangeValue = arrValue[inputValue].value;
    inputSelectot.previousElementSibling.style.paddingLeft=(arrValue[inputValue].offsetLeft- 10)+"px";
    inputSelectot.previousElementSibling.textContent=rangeValue;
  }

}

bindModal(".js-contactUs", ".js-popupCall", ".js-popupCall_close", 'faded', 'fadeOut');
bindModal(".js_price", ".js_popupPrice", ".js-pricePopup_close", 'faded', 'fadeOut');
getRangeInput()


});