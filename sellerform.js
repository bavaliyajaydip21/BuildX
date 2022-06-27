

function er(id,msg){
    document.getElementById(id).innerHTML = msg
}


function checked(){
    let accept = true;
    
    let final = document.getElementById('mainformdiv')

    let a = document.getElementById('f1');
    let b = document.getElementById('f2');
    let c = document.getElementById('f6');
    let d = document.getElementById('f7');

    if ( a.value.length < 3 ){
        er('E1','* atleast 2 latter')
        accept = false;
        final.setAttribute('action','')
    }else{
        er('E1',' ')
    }

    if ( b.value.length < 3 ){
        er('E2','* atleast 2 latter')
        accept = false;
        final.setAttribute('action','')
    }else{
        er('E2',' ')
    }

    if ( c.value != d.value){
        er('E7','* Email is not same')
        accept = false
        final.setAttribute('action','')
    }else{
        er('E7',' ')

        // local storage 

        let un = document.getElementById('f7')
        let p = document.getElementById('f11')

        let unv = un.value;
        let pv = p.value;

        let arr = [unv , pv ]
        // localStorage.clear();
        localStorage.setItem('user', JSON.stringify(arr));

        final.setAttribute('action','Afterform.html')
    }


    return accept;

}



function dropdown(){
    document.getElementById('hed').style.top = '0px'
}

setTimeout( dropdown , 500);











// practiced

// if ( accept == true ){
//     window.location.href = 'afterform.html'
// }

// let form = document.getElementById('mainformdiv');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
    

    

//     if( checked ) {
//         document.getElementById('v2').style.display = 'block';
//         document.getElementById('v1').style.display = 'none';