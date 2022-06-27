
let ouser = JSON.parse(localStorage.getItem('user'))     //  geting item but in array using parce 
let [userid, userpwd] = ouser;           // array destructuring 
 

// validation
function logincheck(){
    let accept = true;


    let final = document.getElementById('mainform')

    let a = document.getElementById('uid');
    let b = document.getElementById('pwd');

    if ( a.value != userid){
        alert('Username did not exist');
        return accept = false;
    }

    if ( b.value != userpwd){
        alert('Wrong password');
        return accept = false;
    }else{
        final.setAttribute('action', 'Afterlogin.html')
    }

    return accept;
}


// for hidding.........................


// let showprofile = document.getElementById('mainform')
// showprofile.addEventListener('submit',function(e){
//     e.preventDefault()

//     if ( logincheck ){
//         document.getElementById('beforelogin').style.display = 'none';
//         document.getElementById('v2').style.display = 'block';
//     }
//     else{
//        document.getElementById('beforelogin') .style.display = 'block';
//        document.getElementById('v2').style.display = 'none';
//     }
// })



