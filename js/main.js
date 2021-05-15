$(document).ready(function () {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function pageReload () {
        return location.reload();
    }
    
    let str = ""
    for(let i = 0; i < 6; i++){
        str += getRandomInt(0,50) + " ";
    }

    $('.coupon-button').click(function () {
        $(this).hide();
        $('.start').show();
        if ($('.box-container .box').length < 49) {
            for (var j = 1; j < 50; j++) {
                $('.box-container').append(`<div class="box">${j}</div)`)
            }
        }
    })

    $('.start').click(function () {
        let alertTextAppend = $('.choose .choose-top').text();
        if ($('.choose .choose-top').length == 6) {
            $(this).hide();
            $('.replay').show();
            Swal.fire({
                title: '<strong>SONUÇLAR</strong>',
                icon: 'info',
                html: `<span>Seçtikleriniz:</span><div class="numbers">${alertTextAppend}</div>
                <span>Şanslı numaralar: </span><div class="random-number">${str}</div>
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonAriaLabel: 'Thumbs down'
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'DİKKAT!',
                text: 'ÇEKİLİŞİ BAŞLATMAK İÇİN 6 TANE SAYI SEÇİNİZ',
            })
        }
    })
    
    $('.replay').click(function(){
        pageReload();
    })

    $('body').on('click', '.box', function () {
        $('.choose-title').show();
        var boxText = $(this).text();
        if ($('.choose .choose-top').length < 6) {
            $('.choose').append(` <div class="choose-top">
        ${boxText}
        </div>`);
            $(this).css('background', 'rgb(161, 161, 161)', 'color', '#fff');
        }
    })
})