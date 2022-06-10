$(function () {

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


// DATE For currency
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '.' + dd + '.' + yyyy;

var todayDate = document.getElementById('today');
todayDate.innerHTML = todayDate.innerHTML.replace('00.00.0000',today);


// Currency
function CBR_XML_Daily_Ru(rates) {
    var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ',');
    var USD = document.getElementById('USD');
    USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate);
    $('.js_header-rates').removeClass('is-loading')
}
