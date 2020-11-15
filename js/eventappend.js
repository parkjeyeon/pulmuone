let eventLeft = $('span.event_btn.left');
let eventRight = $('span.event_btn.right');
let seccontLi = $('.inner-event>ul>li');

eventLeft.on('click', append2Func);

function append2Func(e) {
    let seccontLiFirst = $('.inner-event>ul>li').eq(0);

    $('.inner-event>ul').append(seccontLiFirst)
}

eventRight.on('click', prepend2Func);

function prepend2Func(e) {

    let index = $('.inner-event>ul>li').length - 1;

    let seccontLiLast = $('.inner-event>ul>li').eq(index);

    console.log(seccontLiLast)

    $('.inner-event>ul').prepend(seccontLiLast)
}