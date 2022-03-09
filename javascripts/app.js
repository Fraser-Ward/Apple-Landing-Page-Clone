/// Overlay
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('#header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) { // Close Hamburger Menu
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in'); 
      element.classList.add('fade-out');
    });
  } else { // Open Hamburger Menu
    header.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in'); 
    });
  }
});


/// Accordion
const accordionItemHeader = document.querySelectorAll('#accordionItemHeader');

accordionItemHeader.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains('active')){
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'; // height of element
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
