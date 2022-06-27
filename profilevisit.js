// for scale

let finalid;

function tran(id){
    let a = document.getElementById(id)
    a.style.transform = 'scale(2,2)'
    document.getElementById('cross').style.display = 'block'
    return finalid = id;
}

function f1(){
    tran('im1')
}
function f2(){
    tran('im2')
}
function f3(){
    tran('im3')
}
function f4(){
    tran('im4')
}
function f5(){
    tran('im5')
}
function f6(){
    tran('im6')
}



// for backward scale

function back(id){
    let b = document.getElementById(id)
    b.style.transform = 'none'
    document.getElementById('cross').style.display = 'none'
}


let x = document.getElementById('cross')
x.addEventListener('click', function(){
    back(finalid);
})
