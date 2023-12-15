var forward = 0;

function abc() {
    // var ryu = document.getElementById
    // ('ryu');

    if(event.keyCode === 68){
        var ryu = document.getElementById
    ('ryu');
        forward = forward + 10;
        ryu.style.left = forward +'px';
        
    }
    if(event.keyCode === 65){
        var ryu = document.getElementById
    ('ryu');
        forward = forward - 10;
        ryu.style.left = forward +'px'
    }
    if(event.keyCode === 81){
        var ryu = document.getElementById
    ('ryu');
        ryu.src ='images/ryu_punch.gif'
        ryu.style.height = "380px"
        ryu.style.width = "300px"
    }
    if(event.keyCode === 87){
        var ryu = document.getElementById
    ('ryu');
        ryu.src ='images/ryu_leg.gif'
        ryu.style.height = "320px"
        ryu.style.width = "500px"
    }
    if(event.keyCode === 69){
        var ryu = document.getElementById
    ('ryu');
        ryu.src ='images/ryu_fire.gif'
        ryu.style.height = "300px"
        ryu.style.width = "280px"
    }
    if(event.keyCode === 74){
        var akuma = document.getElementById
    ('akuma');
        right = right - 10;
        akuma.style.left = right +'px';
        
    }
    if(event.keyCode === 76){
        var akuma = document.getElementById
    ('akuma');
        right = right + 10;
        akuma.style.left = right +'px'
    }
    if(event.keyCode === 76){
        var akuma = document.getElementById
    ('akuma');
        right = right + 10;
        akuma.style.left = right +'px'
    }
}


var right = 1150;

     
    // }}
    // // if(event.keyCode === 56){
    //     var akuma = document.getElementById
    // ('akuma');
    // //     forward = forward - 10;
    // //     akuma.style.left = forward +'px'
    // // }
    // if(event.keyCode === 81){
        var akuma = document.getElementById
    ('akuma');
    //     ryu.src ='images/ryu_punch.gif'
    //     ryu.style.height = "380px"
    //     ryu.style.width = "300px"
    // }
    // if(event.keyCode === 87){
        var akuma = document.getElementById
    ('akuma');
    //     ryu.src ='images/ryu_leg.gif'
    //     ryu.style.height = "320px"
    //     ryu.style.width = "500px"
    // }
    // if(event.keyCode === 69){
        var akuma = document.getElementById
    ('akuma');
    //     ryu.src ='images/ryu_fire.gif'
    //     ryu.style.height = "300px"
    //     ryu.style.width = "280px"
    // }
// }

window.onkeydown = abc;







// document.getElementById("ryu").style.transform = "scale(-1, 1)"