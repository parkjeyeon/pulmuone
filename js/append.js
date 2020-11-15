let spanLeft = $('span.arrow.arrowleft');
let spanRight = $('span.arrow.arrowright');
let productLi = $('.product>ul>li');
let arrBg = [];

for (var i=0;i<productLi.length;i++){
    arrBg.push("url(img/index/product_scroller_" + i + ".jpg) no-repeat 50%")
    productLi.eq(i).css({
        'background': arrBg[i],
        'background-size': 'cover'
    })
}

spanLeft.on('click', appendFunc);

function appendFunc(e) {

    let productLiFirst = $('.product>ul>li').eq(0);

    console.log(productLiFirst)

    $('.product>ul').append(productLiFirst)
}

spanRight.on('click', prependFunc);

function prependFunc(e) {

    console.log(e.currentTarget)
    let idx = $('.product>ul>li').length - 1;

    let productLiLast = $('.product>ul>li').eq(idx);

    console.log(productLiLast)

    $('.product>ul').prepend(productLiLast)
}



