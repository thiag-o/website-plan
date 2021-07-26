let res = document.getElementById('res');

let ask = document.querySelector('.ask');


ask.addEventListener('click',function(){
    

    res.style.display = 'block'
    res.style.cursor = 'auto'
    ask.style.cursor = 'auto'
    // if(res.style.display == 'block'){
    //     res.style.display = 'none'
    // }else{
    //     res.style.display = 'block'
    // }
})