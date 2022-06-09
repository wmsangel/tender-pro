$(function () {

    // КУРС ВАЛЮТ
    $.ajax({
        method: 'GET',
        url: 'script.php',
        success: function(response) {
            var json = JSON.parse(response);
            $('.js_header-rates-value').text(json.Record.Value)
            $('.js_header-rates-date').text(json.Record['@attributes'].Date)
            $('.js_header-rates').removeClass('is-loading')
        }
    });


    // POPUP
    $('body')
        .on('click', '.js_open-popup', function (e) {
            e.preventDefault();
            $('.js_overlay, .js_popup').show();
            $('.js_register-form input').focus();
        })
        .on('click', '.js_popup-cloe', function (e) {
            e.preventDefault();
            $('.js_overlay, .js_popup').hide();
        })
        .on('click', '.js_popup-send', function (e) {
            e.preventDefault();
            checkName()
        })
        .on('submit', 'form.js_register-form', function (e) {
            e.preventDefault();
            checkName()
        })
        .on('click', '.js_user-logout', function () {
            $('.js_header-user-info').toggleClass('is-not-auth is-auth');
            $('.js_header-user-name').text('');
        })

    $(document).on('keyup', function(e) {
        if (e.key == "Escape") $('.js_overlay, .js_popup').hide();
    });

})


function checkName() {
    let name = $('.js_register-form input').val(),
        userInfoBlock = $('.js_header-user-info'),
        userInfoName = $('.js_header-user-name');

    if (name != '') {
        userInfoBlock.toggleClass('is-not-auth is-auth')
        userInfoName.text(name);
    }

    $('.js_overlay, .js_popup').hide();
}