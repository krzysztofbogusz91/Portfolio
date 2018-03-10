document.addEventListener("DOMContentLoaded", function () {
    //SLIDER AND NAV
    const arrowRight = document.getElementById('arrow-right');
    const arrowLeft = document.getElementById('arrow-left');
    const projectsGallery = document.getElementById('projects-gallery');
    const circNav = document.getElementById('circles').children;
    const mobileNav = document.getElementById('mobile-nav');
    const menu = document.getElementById('menu')
    const gallery = projectsGallery.children;
    //FORM VALID
    const formSend = document.getElementById('form-send');

    //FORM VALIDATION
    // formSend.addEventListener('click', function () {
    //    // e.preventDefault();
    //     console.log('daf');
    //
    //     alert('form is disabled');
    // });

    //MOBILE NAV
    mobileNav.addEventListener('click', function () {
        menu.classList.toggle('show-nav');
    })


    //SLIDER
    let counter = 0;
    arrowRight.addEventListener('click', function () {
        if (counter >= gallery.length-1 || counter < 0) {
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
        if(counter < 0){
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