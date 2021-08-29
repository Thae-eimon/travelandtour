const topbtn=document.querySelector('.topBtn');

document.addEventListener('scroll',(e)=>{
//    console.log(document.body.clientHeight);
    if(document.body.scrollTop > 800){
        topbtn.fadeIn();
        
    }else{
        topbtn.classList.remove('showbtn');
    }
})

topbtn.addEventListener('click',()=>{

})