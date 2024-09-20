let mode = 0;

function changeMode(){
    switch(mode){
        case 0:
            mode = 1;
            document.body.style.backgroundColor = "#0d002e";
            document.getElementById('main_Cont').style.borderColor = "White";
            document.getElementById('post1').style.borderColor = "White";
            document.getElementById('post2').style.borderColor = "White";
            document.getElementById('post3').style.borderColor = "White";
            document.body.style.color = "white";
            document.getElementById('home').style.color = "White";
            document.getElementById('bulb_On').style.color = "White";
            document.getElementById('home').style.borderColor = "White";
            document.getElementById('bulb_On').style.borderColor = "White";
            document.getElementById('bulb_On').className ="bi bi-lightbulb";
            break;
    
        case 1:
            mode = 0;
            document.body.style.backgroundColor = "white";
            document.getElementById('main_Cont').style.borderColor = "black";
            document.getElementById('post1').style.borderColor = "black";
            document.getElementById('post2').style.borderColor = "black";
            document.getElementById('post3').style.borderColor = "black";
            document.body.style.color = "black";
            document.getElementById('home').style.color = "black";
            document.getElementById('bulb_On').style.color = "black";
            document.getElementById('home').style.borderColor = "black";
            document.getElementById('bulb_On').style.borderColor = "black";
            document.getElementById('bulb_On').className ="bi bi-lightbulb-fill";
            break;
    } 
}

