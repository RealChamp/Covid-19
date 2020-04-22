document.addEventListener('DOMContentLoaded', function () {

    // Humburger menu toggle 
    let humburger = document.querySelector('.humburger'),
        navigation = document.querySelector('.header__navigation-list');



    humburger.addEventListener('click', function () {
        if (humburger.classList.contains('active')) {
            humburger.classList.remove('active');
            navigation.style.display = 'none';
        } else {
            humburger.classList.add('active');
            navigation.style.display = 'block';
        }
    });

    // fix navigation list

    window.addEventListener('resize', function () {
        if (window.innerWidth > 910) {
            navigation.removeAttribute('style');
            humburger.classList.remove('active');
        }
    });


    /* window.addEventListener('scroll', function() {
        let currentPos = window.pageYOffset;
        let paths = document.querySelectorAll('.path-init');

        if(currentPos >= 2900 && currentPos <= 3200) {
            paths.forEach(item => {
                item.classList.add('animate');
            });
        }
    }); */


});