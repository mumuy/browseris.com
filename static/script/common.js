const $scrollContainer = document.documentElement;

// 底部滚动
(function(){
    const $gotop = document.querySelector('.mod-fixedbar .gotop');
    $gotop.addEventListener('click',function(){
        $scrollContainer.scrollTo({
            left:0,
            top:0,
            behavior:'smooth'
        });
    });
})();