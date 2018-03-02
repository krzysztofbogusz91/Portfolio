document.addEventListener("DOMContentLoaded", function () {
    const arrowRight = document.getElementById('arrow-right');
    const arrowLeft = document.getElementById('arrow-left');
    const projectsGallery = document.getElementById('projects-gallery');
    const circNav = document.getElementById('circles').children;

    const gallery = projectsGallery.children;

    let counter = 0;
    arrowRight.addEventListener('click', function () {
        if (counter >= gallery.length-1 || counter < 0) {
            counter = 0;
        } else {
            counter++;
        }
        console.log(counter);
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