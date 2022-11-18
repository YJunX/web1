const fetchImage = (async () => {
const response = await fetch('https://api.unsplash.com/search/photos/?query=coffee&client_id=TcDkidMYRW8fBs4kaxv2Wblm8XatJCrvmpOPBd_EI-Y')
return await response.json()
})()
   


(function(){
    $("nav > li").click(function(){
        var $sub = $(this).children(".sub");
        $sub.slideDown();
        var $Othersub = $(this).siblings().children(".sub");
        $Othersub.slideUp();
    });
});