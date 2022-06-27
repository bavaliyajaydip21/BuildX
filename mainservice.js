// function for redirecting after getting value from mainservice.html (form return)
// this function will validate the data dand redirect's the page to appropriate page 


function redirect() {

    let a = document.getElementById('ss');
    let b = document.getElementById('sort');

    let arr = document.getElementsByTagName('form');

    let[f] = arr;                                       // array destructuring

    if( a.value == 'select'){
        f.setAttribute('action', 'Mainservice.html')
    }


    if ( a.value == 'bricks' && b.value == 'quality'){
        f.setAttribute('action', '1brickQ.html')
    }

    if ( a.value == 'bricks' && b.value == 'price'){
        f.setAttribute('action', '2brickP.html')
    }

    if ( a.value == 'cement'){
        f.setAttribute('action', '3cement.html')
    }

    if ( a.value == 'iron'){
        f.setAttribute('action', '4iron.html')
    }

    if ( a.value == 'crane'){
        f.setAttribute('action', '5crane.html')
    }

    if ( a.value == 'labour'){
        f.setAttribute('action', '6labour.html')
    }

    if ( a.value == 'loader'){
        f.setAttribute('action', '7loader.html')
    }


}