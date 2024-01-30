// Navbar function

document.addEventListener('DOMContentLoaded', function () {
    const navibarMenu = document.querySelector('.navibar-menu');
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = document.querySelector('.navibar').contains(event.target);
        const isClickInsideMenu = navibarMenu.contains(event.target);
        if (!isClickInsideNavbar && !isClickInsideMenu) {
            closeMenu();
        }
    });

    const links = document.querySelectorAll('.navibar-menu a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // event.preventDefault();
            const linkText = link.innerText;
            // handleLinkClick(linkText);
            closeMenu();
        });
    });
});

function toggleMenu() {
    const navibarMenu = document.querySelector('.navibar-menu');
    navibarMenu.classList.toggle('show');
}

function closeMenu() {
    const navibarMenu = document.querySelector('.navibar-menu');
    navibarMenu.classList.remove('show');
}

// function handleLinkClick(linkText) {
// Modify this function to perform actions on link click
// console.log('Link clicked:', linkText);
// For example, you can navigate to the href link.
// const hrefLink = linkText.toLowerCase(); // Assuming href links are in lowercase
// window.location.href = `#${hrefLink}`;
// You can also use other methods to navigate, depending on your requirements
// }

// End of Navbar function


(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



    /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function () {
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if (nowSlide >= itemSlide.length) { nowSlide = 0; }

        setInterval(function () {
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if (nowSlide >= itemSlide.length) { nowSlide = 0; }
        }, delay);
    });


})(jQuery);