let serviceLi=$('.inner-service>ul>li');
let serviceLiSize=serviceLi.length;
let tabsLi=$('.tabs>ul>li');

let idx4=-1;

function fadeServiceFunc() {
    idx4++;
    
    tabsLi.eq(idx4).addClass('on').siblings().removeClass('on');
    
    serviceLi.eq(idx4).fadeIn().siblings().fadeOut();
    
    if(idx4>=serviceLiSize-1) idx4=-1;
}

tabsLi.on('click',function(){
    
    let idx5=$(this).index();
    
    $(this).addClass('on').siblings().removeClass('on');
    
    idx4=idx5;
    serviceLi.eq(idx4).fadeIn().siblings().fadeOut(); 
    
    if(idx4>=serviceLiSize-1) idx4=-1;
})