

function display() {
    var modal = document.getElementById('modal-about');
    if(modal.style.display=='none'){
    modal.style.display = 'block';
    }
    else{
        modal.style.display = 'none';
    }
    var buttonRect = document.querySelector('.btn-link').getBoundingClientRect();
    modal.style.top = buttonRect.bottom + 'px';
    modal.style.left = buttonRect.left + 'px';
}

function closeOnClickOutside(event) {
    var modal = document.getElementById('modal-about');

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        document.removeEventListener('click', closeOnClickOutside);
    }
}

jQuery(document).ready(function(){

    
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
})

$('.work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
      }
  });

