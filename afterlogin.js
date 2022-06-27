// for scale

let finalid;

function tran(id){
    let a = document.getElementById(id)
    a.style.transform = 'scale(2,2)'
    // a.style.position = 'fixed'
    document.getElementById('cross').style.display = 'block'
    return finalid = id;
}



function f1(id){
    tran(id)
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
