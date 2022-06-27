function show(){
    document.getElementById('navbar').style.top = '0px';
    document.getElementById('stack').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}

function hide(){
    document.getElementById('navbar').style.top = '-500px';
    document.getElementById('stack').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}



// card sliding

let arr1 = document.getElementsByClassName('card');

let[a,b,c] = arr1;

console.log(a)


window.addEventListener('scroll', function(){
    if (window.pageYOffset >=200){
        a.style.left = '13px';
    }
    if (window.pageYOffset >=340){
        b.style.left = '0px';
    }
    if (window.pageYOffset >=480){
        c.style.left = '0px';
    }
})