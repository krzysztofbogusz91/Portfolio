document.addEventListener("DOMContentLoaded", function () {
    //SLIDER AND NAV
    const arrowRight = document.getElementById('arrow-right');
    const arrowLeft = document.getElementById('arrow-left');
    const projectsGallery = document.getElementById('projects-gallery');
    const circNav = document.getElementById('circles').children;
    const mobileNav = document.getElementById('mobile-nav');
    const menu = document.getElementById('menu')
    const gallery = projectsGallery.children;
    //FORM VALIDATION
    const form = document.getElementById('form')
    const name = document.getElementById('user');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formSend = document.getElementById('form-btn');

    //FORM VALIDATION

    //check if name is longer than 3 letters

    const messageField = document.querySelector('.message-name');
    name.addEventListener('change', function () {
        let comunicate = false;
        if (this.value.length < 3) {
            comunicate = true;
            messageField.innerText = "name is to short";
        }
        if (comunicate && (this.value.length > 3)) {
            messageField.innerText = "";
            comunicate = false;
        }

    });

    email.addEventListener('change', function () {
        let comunicate = false;
        if(this.value.indexOf('@') === -1){

        }
        if(comunicate && this.value.indexOf('@')!== -1){

        }
    })

    message.addEventListener('change', function () {
        let comunicate = false;
        if (this.value.length < 10 && comunicate === false) {

        }
        if (comunicate && (this.value.length >= 10)) {

        }

    });

    formSend.addEventListener('click', function (e) {
        e.preventDefault();


        alert('form is disabled');
    });

    //MOBILE NAV
    mobileNav.addEventListener('click', function () {
        menu.classList.toggle('show-nav');
    })


    //SLIDER
    let counter = 0;
    arrowRight.addEventListener('click', function () {
        if (counter >= gallery.length - 1 || counter < 0) {
            counter = 0;
        } else {
            counter++;
        }

        for (let i = 0; i < gallery.length; i++) {
            gallery[i].classList.remove('show');
            circNav[i].classList.remove('active');
            if (i === counter) {
                gallery[i].classList.add('show');
                circNav[i].classList.add('active');
            }
        }

    });

    arrowLeft.addEventListener('click', function () {
        counter--;
        if (counter < 0) {
            counter = 1;
        }

        for (let i = 0; i < gallery.length; i++) {
            gallery[i].classList.remove('show');
            circNav[i].classList.remove('active');
            if (i === counter) {
                gallery[i].classList.add('show');
                circNav[i].classList.add('active');
            }
        }

    });

});
